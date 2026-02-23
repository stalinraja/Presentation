import { motion } from 'motion/react';
import { Users, Code, Database, Shield, UserCheck } from 'lucide-react';

export function TeamStructureSlide() {
  const teamRoles = [
    {
      title: 'Digital Operations Manager',
      icon: <UserCheck className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-600',
      responsibilities: [
        'Oversee entire digital transformation',
        'Coordinate between departments',
        'Report to Diocese leadership',
        'Manage timelines and budgets'
      ],
      count: '1'
    },
    {
      title: 'Full-Stack Developers',
      icon: <Code className="w-8 h-8" />,
      color: 'from-purple-500 to-purple-600',
      responsibilities: [
        'Build and maintain web applications',
        'Implement micro-services architecture',
        'Frontend and backend development',
        'API integrations'
      ],
      count: '3-4'
    },
    {
      title: 'Database Administrator',
      icon: <Database className="w-8 h-8" />,
      color: 'from-green-500 to-green-600',
      responsibilities: [
        'Manage central SQL database',
        'Ensure data consistency',
        'Backup and recovery systems',
        'Performance optimization'
      ],
      count: '1-2'
    },
    {
      title: 'Security Specialist',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-red-600',
      responsibilities: [
        'Implement RBAC system',
        'Security audits and compliance',
        'Data encryption protocols',
        'Vulnerability assessments'
      ],
      count: '1'
    },
    {
      title: 'Data Entry Operators',
      icon: <Users className="w-8 h-8" />,
      color: 'from-orange-500 to-orange-600',
      responsibilities: [
        'Digitize historical records',
        'Member data entry',
        'Property records input',
        'Quality assurance'
      ],
      count: '4-6'
    }
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-slate-50 to-blue-50 p-4 md:p-12 overflow-auto">
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-3">
          <Users className="w-8 h-8 text-purple-600" />
          <h2 className="text-2xl md:text-4xl text-slate-800">Team Structure</h2>
        </div>
        <p className="text-xl text-slate-600">Digital Operations Team Composition</p>
      </motion.div>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200 rounded-xl p-6 mb-8"
      >
        <p className="text-lg text-slate-700 text-center leading-relaxed">
          Building an <span className="font-bold text-purple-600">in-house team</span> ensures long-term 
          sustainability and reduces dependency on external vendors
        </p>
      </motion.div>

      <div className="space-y-4">
        {teamRoles.map((role, index) => (
          <motion.div
            key={index}
            initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
          >
            <div className="flex items-stretch">
              {/* Icon and Count */}
              <div className={`bg-gradient-to-br ${role.color} text-white p-6 flex flex-col items-center justify-center min-w-[120px]`}>
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5, type: "spring" }}
                >
                  {role.icon}
                </motion.div>
                <div className="text-3xl mt-3">{role.count}</div>
              </div>

              {/* Content */}
              <div className="flex-1 p-5">
                <h3 className="text-xl text-slate-800 mb-3">{role.title}</h3>
                <ul className="grid grid-cols-2 gap-2">
                  {role.responsibilities.map((responsibility, respIndex) => (
                    <motion.li
                      key={respIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 + respIndex * 0.05, duration: 0.4 }}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-gradient-to-r ${role.color}`}></div>
                      <span>{responsibility}</span>
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
        className="mt-8 grid grid-cols-3 gap-4"
      >
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-4 text-center">
          <div className="text-3xl mb-1">10-14</div>
          <div className="text-sm opacity-90">Total Team Members</div>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg p-4 text-center">
          <div className="text-3xl mb-1">100%</div>
          <div className="text-sm opacity-90">In-House Team</div>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg p-4 text-center">
          <div className="text-3xl mb-1">5</div>
          <div className="text-sm opacity-90">Key Roles</div>
        </div>
      </motion.div>
    </div>
  );
}
