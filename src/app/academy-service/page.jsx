import { CheckCircleIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import Design from '../homepage1/components/Design';
import Head from 'next/head';



export const metadata = {
    title: `Academy Services - London Crown Institute of Training`,
    description: 'Take the first step towards unlocking your full potential. Contact us today to learn more about our services and how we can tailor them to your unique needs.',
    openGraph: {
      title: `Academy Services - London Crown Institute of Training`,
      description: 'Take the first step towards unlocking your full potential. Contact us today to learn more about our services and how we can tailor them to your unique needs.',
      locale: 'en_US',
      type: 'website',
    },
    robots: {
      index: true, // Allow indexing
      follow: true, // Allow following links
    },
    
}

const translations = {
  en: {
    heading: 'Academy Services',
    whyChooseUs: 'Why Choose Our Services?',
    getStarted: 'Ready to Get Started?',
    description:
      'Take the first step towards unlocking your full potential. Contact us today to learn more about our services and how we can tailor them to your unique needs.',
    schedule: 'Schedule A Consultation',
    tabs: {
      all: 'Training',
      academic: 'Corporate',
      support: 'Consulting',
    },
    services: [
      {
        name: 'Executive Leadership Development',
        description:
          'Develop leadership skills to manage teams and drive organizational success.',
        features: [
          'Leadership styles and strategies',
          'Emotional intelligence in leadership',
          'Decision-making and problem-solving skills',
        ],
      },
      {
        name: 'Industry-Specific Certifications',
        description:
          'Get certified in sectors like finance, healthcare, IT, and project management.',
        features: [
          'Industry-recognized credentials',
          'Specialized training modules',
          'Exam preparation and study materials',
        ],
      },
      {
        name: 'Soft Skills Enhancement',
        description:
          'Build essential interpersonal skills for better workplace communication and collaboration.',
        features: [
          'Communication and negotiation skills',
          'Conflict resolution strategies',
          'Time management and productivity',
        ],
      },
      {
        name: ' Compliance & Regulatory Training',
        description:
          'Stay ahead of industry regulations with courses focused on compliance and legal standards.',
        features: [
          'Legal and ethical standards in business',
          'Anti-money laundering (AML) & counter-terrorism financing (CTF)',
          'Industry-specific compliance best practices',
        ],
      },
      {
        name: 'Career Advancement Programs',
        description:
          'Prepare for career transitions or progress in your current role with tailored learning paths.',
        features: [
          'Personal branding and networking',
          'Resume building and job search strategies',
          'Interview preparation and negotiation techniques',
        ],
      },
      {
        name: 'Technical Skills Development',
        description:
          'Learn the technical skills necessary to stay competitive in your field.',
        features: [
          'Software training (Excel, CRM systems, etc.)',
          'Project management tools (JIRA, Trello, etc.)',
          ' Data analysis and coding fundamentals',
        ],
      },
      {
        name: 'Custom Training Programs',
        description:
          'Develop training tailored to the specific needs of your organization.',
        features: [
          'Needs assessment and skill gap analysis',
          'Custom course creation',
          'Flexible delivery methods (on-site, online, blended)',
        ],
      },
      {
        name: 'Team Building Workshops',
        description:
          'Build strong, collaborative teams through targeted workshops and group activities.',
        features: [
          'Trust-building exercises',
          'Problem-solving in teams',
          'Effective communication and collaboration',
        ],
      },
      {
        name: 'Leadership Development',
        description:
          'Cultivate effective leaders who can inspire and drive teams toward success.',
        features: [
          'Strategic thinking and vision',
          'Change management',
          'Employee motivation and engagement',
        ],
      },
      {
        name: 'Compliance & Risk Management',
        description:
          'Ensure your company meets legal and regulatory standards with specialized compliance training.',
        features: [
          'Anti-bribery and corruption training',
          'Health and safety compliance',
          'Industry-specific risk management',
        ],
      },
      {
        name: 'Employee Motivation & Retention',
        description:
          'Keep your workforce motivated with training that promotes engagement and reduces turnover. ',
        features: [
          'Employee recognition programs',
          'Career development and growth opportunities',
          'Enhancing workplace culture and satisfaction',
        ],
      },
      {
        name: 'Performance Improvement',
        description:
          'Improve the overall performance and efficiency of teams and individuals within your organization.',
        features: [
          'Performance appraisal techniques',
          'Target setting and goal alignment',
          'Monitoring and feedback systems',
        ],
      },

      {
        name: 'Workforce Development Strategy',
        description:
          'Create a workforce plan that aligns employee skills with business needs.',
        features: [
          'Skills gap analysis',
          'Training needs assessment',
          'Talent management strategies',
        ],
      },
      {
        name: 'Career Coaching & Development',
        description:
          'Receive personalized coaching to help you achieve your career goals and overcome challenges.',
        features: [
          'Goal setting and career planning',
          'Professional growth strategies',
          'Job transition support',
        ],
      },
      {
        name: 'Learning and Development Audits',
        description:
          'Evaluate your current training programs and identify areas for improvement.',
        features: [
          'Training effectiveness review',
          'Employee feedback collection',
          'Recommendations for training enhancements',
        ],
      },
      {
        name: 'Employee Engagement Strategies',
        description:
          'Develop strategies to boost employee engagement and satisfaction.',
        features: [
          'Communication strategies',
          'Employee recognition programs',
          'Creating a positive work culture',
        ],
      },
      {
        name: 'Organizational Change Management',
        description:
          'Effectively manage and implement change within your organization.',
        features: [
          'Change readiness assessments',
          'Communication during change',
          'Post-change evaluation and support',
        ],
      },
      {
        name: 'Bespoke Learning Solutions',
        description:
          'Design and deliver tailored learning solutions to meet your unique organizational needs.',
        features: [
          'Custom course development',
          'Blended learning programs',
          'Scalable learning platforms',
        ],
      },
    ],
    reasons: [
      {
        title: 'Industry Expertise',
        content:
          'Our trainers are experts with years of experience in their respective fields, providing you with up-to-date, practical knowledge.',
      },
      {
        title: 'Tailored Solutions',
        content:
          'We understand that every individual and organization is unique. Our programs are customized to meet specific needs, ensuring relevance and maximum impact.',
      },
      {
        title: 'Proven Results',
        content:
          'Our courses and training programs have a proven track record of enhancing skills, improving performance, and driving business success.',
      },
      {
        title: 'Flexible Learning Options',
        content:
          'Whether on-site, online, or through blended learning, we offer flexible delivery methods to accommodate your preferences and schedules.',
      },
      {
        title: 'Comprehensive Support',
        content:
          'From initial consultation to post-training follow-up, we provide ongoing support to ensure continued growth and development.',
      },
      {
        title: 'Global Reach',
        content:
          'With clients across various industries and regions, we have the expertise and experience to serve businesses and professionals worldwide.',
      },
    ],
  },
  ar: {
    heading: 'خدمات الأكاديمية',
    whyChooseUs: 'لماذا تختار خدماتنا؟',
    getStarted: 'هل أنت مستعد للبدء؟',
    description:
      'اتخذ الخطوة الأولى نحو إطلاق إمكاناتك الكاملة. تواصل معنا اليوم لمعرفة المزيد عن خدماتنا وكيف يمكننا تخصيصها لتلبية احتياجاتك الفريدة.',
    schedule: 'جدولة استشارة',
    tabs: {
      all: 'جميع الخدمات',
      academic: 'أكاديمية',
      support: 'دعم',
    },
    services: [
      {
        name: 'خطط تعلم شخصية',
        description:
          'استراتيجيات تعليمية مصممة خصيصًا لتلبية احتياجات وأنماط تعلم الطلاب الفردية.',
        features: [
          'منهج مخصص',
          'تقييمات تقدم منتظمة',
          'تقنيات تعلم تكيفية',
          'جلسات إرشاد فردية',
        ],
      },
      {
        name: 'الدروس الخصوصية المتخصصة',
        description:
          'الوصول إلى معلمين مؤهلين تأهيلاً عالياً في مختلف المواد لدعم وتعزيز تعلم الطلاب.',
        features: [
          'خبراء في المواد الدراسية',
          'جدولة مرنة',
          'خيارات حضورية وعبر الإنترنت',
          'جلسات فردية وجماعية صغيرة',
        ],
      },
      {
        name: 'مرافق حديثة',
        description:
          'بيئات تعليمية حديثة ومجهزة بشكل جيد تعزز الإبداع والتعاون والتميز الأكاديمي.',
        features: [
          'مختبرات تكنولوجية متقدمة',
          'فصول دراسية متعددة الوسائط',
          'مساحات دراسة تعاونية',
          'موارد مكتبية واسعة',
        ],
      },
      {
        name: 'الإرشاد المهني',
        description:
          'إرشادات شاملة لمساعدة الطلاب على استكشاف المسارات المهنية واتخاذ قرارات مستنيرة بشأن مستقبلهم.',
        features: [
          'تقييمات كفاءة مهنية',
          'ندوات خبراء الصناعة',
          'توفير فرص التدريب',
          'دعم التقديم للجامعات',
        ],
      },
      {
        name: 'أنشطة خارج المنهج',
        description: 'مجموعة واسعة من البرامج لتطوير الأفراد وبناء الشخصية.',
        features: [
          'فرق رياضية وأندية',
          'برامج الفنون والموسيقى',
          'مبادرات الخدمة المجتمعية',
          'ورش عمل تطوير القيادة',
        ],
      },
      {
        name: 'تعاون أولياء الأمور والمعلمين',
        description: 'شراكات قوية بين المعلمين والأسر لدعم نجاح الطلاب.',
        features: [
          'اجتماعات دورية بين أولياء الأمور والمعلمين',
          'تتبع تقدم الطالب عبر الإنترنت',
          'ورش عمل وندوات للأولياء',
          'فعاليات مشاركة الأسرة',
        ],
      },
    ],
    reasons: [
      {
        title: 'سجل حافل بالإنجازات',
        content:
          'لقد ساعدت خدماتنا الآلاف من الطلاب على تحقيق أهدافهم الأكاديمية والشخصية، وقد التحق الكثير منهم بجامعات كبرى وحصلوا على وظائف ناجحة.',
      },
      {
        title: 'نهج شامل',
        content:
          'نؤمن بتطوير الأفراد بشكل متكامل. تشمل خدماتنا الجوانب الأكاديمية والاجتماعية والعاطفية والعملية للتعليم.',
      },
      {
        title: 'ابتكار مستمر',
        content:
          'نقوم بتحديث خدماتنا باستمرار لتضمين أحدث الأبحاث والتقنيات التعليمية، مما يضمن أن طلابنا دائمًا في الطليعة.',
      },
    ],
  },
};

export default function AcademyService({ params }) {
  const locale = params.locale || 'en';
  const t = translations[locale] || translations['en'];
  const isRTL = locale === 'ar';

  return (
    <><div>
        <Design secondary={true} bg={true}></Design>
        <div className="bg-[#0A1828] py-8">
          <h1 className="text-center md:mt-10 md:pt-6 text-3xl font-bold text-white">Academy Services</h1>
        </div>
        <div className="container mx-auto px-4 py-8">
          <Tabs defaultValue="all" className="mb-12">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="all">{t.tabs.all}</TabsTrigger>
              <TabsTrigger value="academic">{t.tabs.academic}</TabsTrigger>
              <TabsTrigger value="support">{t.tabs.support}</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <ServiceCards services={t.services.slice(0, 6)} isRTL={isRTL} />
            </TabsContent>
            <TabsContent value="academic">
              <ServiceCards services={t.services.slice(6, 12)} isRTL={isRTL} />
            </TabsContent>
            <TabsContent value="support">
              <ServiceCards services={t.services.slice(12, 18)} isRTL={isRTL} />
            </TabsContent>
          </Tabs>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-6">{t.whyChooseUs}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.reasons.map((reason, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className='text-primary text-xl'>{reason.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-base'>{reason.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-primary ">{t.getStarted}</h2>
            <p className="mb-8 max-w-2xl mx-auto text-base">{t.description}</p>
            <Link
              href={`/consulting-services`}
              className="text-white text-sm bg-secondary p-2 rounded-sm"
            >
              {t.schedule}
            </Link>
          </section>
        </div>
      </div></>
  );
}

function ServiceCards({ services, isRTL }) {
  if (!services || services.length === 0) {
    return <p>No services available.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-base">
      {services.map((service, index) => (
        <Card key={index} className="flex flex-col">
          <CardHeader>
            <CardTitle className={`text-primary text-base ${isRTL ? 'text-right' : 'text-left'}`}>
              {service.name}
            </CardTitle>
            <CardDescription className={`text-base ${isRTL ? 'text-right' : 'text-left'}`}>
              {service.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul
              className={`space-y-2 ${
                isRTL ? 'text-right rtl' : 'text-left ltr'
              }`}
            >
              {service.features.map((feature, fIndex) => (
                <li
                  key={fIndex}
                  className={`flex items-center ${
                    isRTL ? 'flex-row-reverse' : ''
                  }`}
                >
                  <CheckCircleIcon
                    className={`h-5 w-5 text-green-500 ${
                      isRTL ? 'ml-2' : 'mr-2'
                    }`}
                  />
                  <span className='text-base'>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
