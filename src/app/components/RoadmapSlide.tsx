import { motion } from 'motion/react';
import { Calendar, Hammer, TrendingUp, Building, Rocket } from 'lucide-react';

export function RoadmapSlide() {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'The Foundation',
      timeline: 'Months 1-6',
      icon: <Hammer className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-500',
      items: [
        'Infrastructure: Central Database and Cloud Servers setup',
        'Digital Operations Team hiring (Manager, Developers, Data Entry)',
        'Core Modules: Member Onboarding and Role-based Hierarchy',
        'Budget Focus: Hardware (Servers) and Talent Acquisition'
      ]
    },
    {
      phase: 'Phase 2',
      title: 'Operational Efficiency',
      timeline: 'Months 7-12',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-500',
      items: [
        'Finance Suite: Donation module, Payroll, and Audit tools',
        'Institution Integration: Schools, Colleges, and Hospitals',
        'Budget Focus: Software development costs and staff training'
      ]
    },
    {
      phase: 'Phase 3',
      title: 'Asset & Legal',
      timeline: 'Months 13-18',
      icon: <Building className="w-8 h-8" />,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-500',
      items: [
        'Property Module: Digitizing land records and rental agreements',
        'Archive Management: High-speed scanning of historical documents',
        'Compliance: Legal and Constitutional tracking module',
        'Budget Focus: Specialized scanning equipment and legal consultancy'
      ]
    },
    {
      phase: 'Phase 4',
      title: 'Community & Growth',
      timeline: 'Months 19-24',
      icon: <Rocket className="w-8 h-8" />,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-500',
      items: [
        'Matrimony: Internal Diocesan Matrimony portal launch',
        'HR Seniority tracking for clergy and staff activation',
        'Mobile App launch for members to access certificates',
        'Budget Focus: Marketing/Internal awareness and maintenance'
      ]
    }
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-12 overflow-auto">
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-3">
          <Calendar className="w-8 h-8 text-blue-600" />
          <h2 className="text-2xl md:text-4xl text-slate-800">The Roadmap</h2>
        </div>
        <p className="text-xl text-slate-600">24-Month Phase-wise Implementation</p>
      </motion.div>

      <div className="space-y-5">
        {phases.map((phase, index) => (
          <motion.div
            key={index}
            initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 + index * 0.15, duration: 0.7 }}
            className={`bg-white rounded-xl shadow-lg overflow-hidden border-l-4 ${phase.borderColor}`}
          >
            <div className="flex items-stretch">
              {/* Phase Header */}
              <div className={`bg-gradient-to-br ${phase.color} text-white p-6 flex flex-col items-center justify-center min-w-[140px]`}>
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5 + index * 0.15, duration: 0.5, type: "spring" }}
                >
                  {phase.icon}
                </motion.div>
                <div className="text-sm mt-2 opacity-90">{phase.phase}</div>
                <div className="text-xs mt-1 opacity-75">{phase.timeline}</div>
              </div>

              {/* Phase Content */}
              <div className="flex-1 p-6">
                <h3 className="text-xl text-slate-800 mb-3">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.15 + itemIndex * 0.1, duration: 0.4 }}
                      className="flex items-start gap-2 text-sm text-slate-700"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-gradient-to-r ${phase.color}`}></div>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-4 text-center"
      >
        <p className="text-sm">
          A carefully structured <span className="font-bold">24-month journey</span> to complete digital transformation
        </p>
      </motion.div>
    </div>
  );
}
