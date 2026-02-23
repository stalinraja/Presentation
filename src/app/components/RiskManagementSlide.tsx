import { motion } from 'motion/react';
import { AlertTriangle, Shield, TrendingUp, CheckCircle2 } from 'lucide-react';

export function RiskManagementSlide() {
  const risks = [
    {
      risk: 'Resistance to Change',
      impact: 'High',
      mitigation: 'Comprehensive training programs and change management workshops',
      color: 'border-red-500',
      impactColor: 'bg-red-500'
    },
    {
      risk: 'Data Migration Errors',
      impact: 'High',
      mitigation: 'Phased migration with extensive testing and validation at each stage',
      color: 'border-orange-500',
      impactColor: 'bg-orange-500'
    },
    {
      risk: 'Budget Overruns',
      impact: 'Medium',
      mitigation: 'Detailed phase-wise budgeting with 15% contingency buffer',
      color: 'border-yellow-500',
      impactColor: 'bg-yellow-500'
    },
    {
      risk: 'Technical Skill Gap',
      impact: 'Medium',
      mitigation: 'Extensive training and documentation for in-house team',
      color: 'border-blue-500',
      impactColor: 'bg-blue-500'
    },
    {
      risk: 'System Downtime',
      impact: 'Medium',
      mitigation: 'Redundant systems, regular backups, and disaster recovery plan',
      color: 'border-purple-500',
      impactColor: 'bg-purple-500'
    }
  ];

  const successFactors = [
    'Strong leadership commitment and sponsorship',
    'Regular communication and stakeholder engagement',
    'Phased implementation reduces risk exposure',
    'In-house team ensures long-term sustainability'
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
          <AlertTriangle className="w-8 h-8 text-orange-600" />
          <h2 className="text-2xl md:text-4xl text-slate-800">Risk Management</h2>
        </div>
        <p className="text-xl text-slate-600">Identifying and Mitigating Potential Risks</p>
      </motion.div>

      <div className="space-y-3 mb-8">
        {risks.map((item, index) => (
          <motion.div
            key={index}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
            className={`bg-white rounded-lg shadow-md p-4 border-l-4 ${item.color} hover:shadow-lg transition-all`}
          >
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg text-slate-800">{item.risk}</h3>
                  <span className={`${item.impactColor} text-white text-xs px-3 py-1 rounded-full`}>
                    {item.impact} Impact
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-sm text-slate-600">{item.mitigation}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-6"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-green-500 p-2 rounded-lg">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl text-slate-800">Success Factors</h3>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {successFactors.map((factor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.4 }}
              className="flex items-start gap-2"
            >
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700">{factor}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-6 text-center"
      >
        <p className="text-lg">
          <span className="font-bold">Proactive Risk Management</span> ensures smooth implementation and 
          maximizes success probability
        </p>
      </motion.div>
    </div>
  );
}
