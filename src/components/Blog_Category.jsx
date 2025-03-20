"use client";
import React, { useState, useEffect } from "react";
import BLogsCardIndiviual from "./BLogsCardIndiviual";
import Loading from "./Loading";
import fetchData from "@/actions/server";

export const Blog_Category = ({ initialArticles, params }) => {
  const [articles, setArticles] = useState(initialArticles?.data || []);
  const [page, setPage] = useState(1); // Current page
  const [hasMore, setHasMore] = useState(true); // To check if more blogs exist
  const [loading, setLoading] = useState(false);

  const fetchMoreArticles = async () => {
    if (loading || !hasMore) return; // Avoid multiple requests at the same time or if no more articles exist

    setLoading(true);

    try {
      const data = await fetchData(`https://backendbatd.clinstitute.co.uk/api/blogs/${params.category}/category?per_page=6&page=${page+1}`)

      // Append new articles to the existing list
      if (data?.data?.length > 0) {
        setArticles((prevArticles) => [...prevArticles, ...data.data]);
        setPage((prevPage) => prevPage + 1); // Update the current page
      }

      // If the fetched data length is less than 6, that means no more articles are available
      if (data?.data?.length < 6) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching more articles:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <BLogsCardIndiviual
            list={article}
            background={true}
            index={index}
            params={params.category}
            key={article.id} // Assuming each article has a unique ID
          />
        ))}
      </div>
      <div className="w-full h-[1.5px] text-secondary bg-secondary mt-7" />

      {/* "See More" Button */}
      {hasMore && (
        <div className="flex justify-center mt-8">
          <button
            onClick={fetchMoreArticles}
            className="text-white p-1 px-6 rounded-full text-xs shadow-lg transition-all hover:scale-105"
            style={{
              background:
                "linear-gradient(180deg, rgba(6,24,57,1) 0%, rgba(6,24,57,0.64) 85%, rgba(6,24,57,0.57) 100%)",
            }}
            disabled={loading}
          >
            {loading ? <Loading /> : "See More"}
          </button>
        </div>
      )}
    </div>
  );
};
