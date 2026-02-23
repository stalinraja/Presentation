import { motion } from 'motion/react';
import { Building2, Users, DollarSign, Home, Scale, Briefcase, Grid3x3 } from 'lucide-react';

export function EcosystemSlide() {
  const modules = [
    {
      category: 'Governance',
      icon: <Building2 className="w-6 h-6" />,
      modules: 'Council, Diocese, & Clergy Management',
      function: 'Digital oversight of administrative hierarchies.',
      color: 'bg-blue-500'
    },
    {
      category: 'People',
      icon: <Users className="w-6 h-6" />,
      modules: 'Member Onboarding & Matrimony',
      function: 'Life-cycle management from Baptism to Marriage.',
      color: 'bg-purple-500'
    },
    {
      category: 'Finance',
      icon: <DollarSign className="w-6 h-6" />,
      modules: 'Donation, Audit, & Payroll',
      function: 'Automated 80G receipts, salary slips, and transparent auditing.',
      color: 'bg-green-500'
    },
    {
      category: 'Assets',
      icon: <Home className="w-6 h-6" />,
      modules: 'Property & Rental Management',
      function: 'Tracking land deeds, lease expiry alerts, and maintenance.',
      color: 'bg-orange-500'
    },
    {
      category: 'Legal',
      icon: <Scale className="w-6 h-6" />,
      modules: 'Compliance & Constitutional',
      function: 'Ensuring all actions align with Diocese Constitution and Govt laws.',
      color: 'bg-red-500'
    },
    {
      category: 'HR',
      icon: <Briefcase className="w-6 h-6" />,
      modules: 'Recruitment & Seniority Tracking',
      function: 'Merit-based, transparent promotion and hiring tracking.',
      color: 'bg-indigo-500'
    }
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-12 overflow-auto">
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-3">
          <Grid3x3 className="w-8 h-8 text-indigo-600" />
          <h2 className="text-2xl md:text-4xl text-slate-800">The Ecosystem</h2>
        </div>
        <p className="text-xl text-slate-600 mb-8">Module Breakdown</p>
      </motion.div>

      <div className="space-y-4">
        {modules.map((module, index) => (
          <motion.div
            key={index}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden"
          >
            <div className="flex items-stretch">
              {/* Icon Column */}
              <div className={`${module.color} text-white p-6 flex items-center justify-center min-w-[100px]`}>
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5, type: "spring" }}
                >
                  {module.icon}
                </motion.div>
              </div>
              
              {/* Content Columns */}
              <div className="flex-1 grid grid-cols-3 divide-x divide-slate-200">
                <div className="p-4">
                  <div className="text-xs text-slate-500 mb-1">Category</div>
                  <div className="text-lg text-slate-800">{module.category}</div>
                </div>
                <div className="p-4">
                  <div className="text-xs text-slate-500 mb-1">Key Modules</div>
                  <div className="text-sm text-slate-700">{module.modules}</div>
                </div>
                <div className="p-4">
                  <div className="text-xs text-slate-500 mb-1">Primary Function</div>
                  <div className="text-sm text-slate-700">{module.function}</div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-6 text-center"
      >
        <p className="text-lg">
          <span className="font-bold">6 Integrated Categories</span> working together as a unified digital ecosystem
        </p>
      </motion.div>
    </div>
  );
}
