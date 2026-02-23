import { motion } from 'motion/react';
import { Flag, CheckCircle2, Clock } from 'lucide-react';

export function MilestonesSlide() {
  const milestones = [
    {
      month: 'Month 3',
      title: 'Infrastructure Ready',
      description: 'Central database operational, cloud servers live',
      status: 'critical',
      color: 'bg-blue-500'
    },
    {
      month: 'Month 6',
      title: 'Core Team Onboarded',
      description: 'Digital Operations Team fully hired and trained',
      status: 'critical',
      color: 'bg-blue-600'
    },
    {
      month: 'Month 9',
      title: 'Finance Module Live',
      description: 'Donation and payroll systems operational',
      status: 'high',
      color: 'bg-green-500'
    },
    {
      month: 'Month 12',
      title: 'Institutions Integrated',
      description: 'All schools, colleges, hospitals connected',
      status: 'high',
      color: 'bg-green-600'
    },
    {
      month: 'Month 15',
      title: 'Property Records Digitized',
      description: 'All land deeds and rental agreements digital',
      status: 'medium',
      color: 'bg-purple-500'
    },
    {
      month: 'Month 18',
      title: 'Archive Digitization Complete',
      description: '79 years of historical documents preserved',
      status: 'medium',
      color: 'bg-purple-600'
    },
    {
      month: 'Month 21',
      title: 'Matrimony Portal Launch',
      description: 'Internal matrimony system goes live',
      status: 'medium',
      color: 'bg-orange-500'
    },
    {
      month: 'Month 24',
      title: 'Full System Launch',
      description: 'Mobile app live, all modules operational',
      status: 'critical',
      color: 'bg-orange-600'
    }
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-slate-50 to-slate-100 p-12 overflow-auto">
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-3">
          <Flag className="w-8 h-8 text-blue-600" />
          <h2 className="text-4xl text-slate-800">Key Milestones</h2>
        </div>
        <p className="text-xl text-slate-600">24-Month Delivery Timeline</p>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[60px] top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-green-500 via-purple-500 to-orange-500"></div>

        <div className="space-y-4">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              className="relative pl-32"
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.3, type: "spring" }}
                className={`absolute left-[44px] top-1/2 -translate-y-1/2 w-8 h-8 ${milestone.color} rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10`}
              >
                {index === milestones.length - 1 ? (
                  <CheckCircle2 className="w-4 h-4 text-white" />
                ) : (
                  <Clock className="w-4 h-4 text-white" />
                )}
              </motion.div>

              {/* Month label */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 text-sm text-slate-600 w-20 text-right pr-2">
                {milestone.month}
              </div>

              {/* Content card */}
              <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-all">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg text-slate-800 mb-1">{milestone.title}</h3>
                    <p className="text-sm text-slate-600">{milestone.description}</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs text-white ${
                    milestone.status === 'critical' ? 'bg-red-500' :
                    milestone.status === 'high' ? 'bg-green-500' : 'bg-blue-500'
                  }`}>
                    {milestone.status}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="mt-8 grid grid-cols-3 gap-4"
      >
        <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-lg p-3 text-center">
          <div className="text-2xl mb-1">3</div>
          <div className="text-xs opacity-90">Critical Milestones</div>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg p-3 text-center">
          <div className="text-2xl mb-1">2</div>
          <div className="text-xs opacity-90">High Priority</div>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-3 text-center">
          <div className="text-2xl mb-1">3</div>
          <div className="text-xs opacity-90">Medium Priority</div>
        </div>
      </motion.div>
    </div>
  );
}
