import { motion } from 'motion/react';
import { AlertCircle, Users, TrendingUp, Clock, Archive } from 'lucide-react';

export function ExecutiveSummarySlide() {
  const reasons = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Data Integrity',
      description: 'Moving from paper registers to a Single Source of Truth prevents data loss and duplication.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Transparency',
      description: 'Real-time financial tracking (Donations/Audit) builds deeper trust within the congregation.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Efficiency',
      description: 'Automating payroll and certificate generation saves thousands of man-hours annually.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Archive className="w-8 h-8" />,
      title: 'Legacy Preservation',
      description: "Digitizing 79 years of archives ensures the Diocese's history is never lost to time.",
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-slate-50 to-slate-100 p-12">
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-3">
          <AlertCircle className="w-8 h-8 text-blue-600" />
          <h2 className="text-4xl text-slate-800">The "Why"</h2>
        </div>
        <p className="text-xl text-slate-600 mb-8">Why Transform Now?</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg"
      >
        <p className="text-lg text-slate-700 leading-relaxed">
          With over <span className="font-bold text-blue-600">200,000 members</span> and{' '}
          <span className="font-bold text-blue-600">hundreds of institutions</span>, the manual or 
          semi-digital "silo" approach creates bottlenecks.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 + index * 0.15, duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start gap-4">
              <div className={`bg-gradient-to-br ${reason.color} text-white p-3 rounded-lg flex-shrink-0`}>
                {reason.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl text-slate-800 mb-2">{reason.title}</h3>
                <p className="text-slate-600 leading-relaxed">{reason.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="mt-8 text-center"
      >
        <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full text-sm">
          Moving from Legacy to Innovation
        </div>
      </motion.div>
    </div>
  );
}
