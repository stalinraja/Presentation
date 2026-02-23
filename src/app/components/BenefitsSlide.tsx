import { motion } from 'motion/react';
import { User, Users, Crown, Building2, Target } from 'lucide-react';

export function BenefitsSlide() {
  const stakeholders = [
    {
      title: 'Individual Member',
      icon: <User className="w-10 h-10" />,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      benefits: [
        'Get certificates (Baptism/Membership) instantly on smartphone',
        'Easy online donation tracking',
        'Access to trusted Matrimony portal'
      ]
    },
    {
      title: 'The Clergy',
      icon: <Users className="w-10 h-10" />,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      benefits: [
        'Reduced paperwork significantly',
        'More time for ministry',
        'Less time on manual ledger entries'
      ]
    },
    {
      title: 'Diocese Leadership',
      icon: <Crown className="w-10 h-10" />,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      benefits: [
        'High-level dashboards with real-time data',
        'Financial health visibility at a click',
        'Property status overview instantly'
      ]
    },
    {
      title: 'The Institutions',
      icon: <Building2 className="w-10 h-10" />,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      benefits: [
        'Streamlined hiring processes',
        'Standardized payroll across all facilities',
        'Efficient management systems'
      ]
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
          <Target className="w-8 h-8 text-green-600" />
          <h2 className="text-4xl text-slate-800">Stakeholder Benefits</h2>
        </div>
        <p className="text-xl text-slate-600">Value for Everyone</p>
      </motion.div>

      <div className="grid grid-cols-2 gap-6">
        {stakeholders.map((stakeholder, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 + index * 0.15, duration: 0.6, type: "spring" }}
            className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all ${stakeholder.bgColor} bg-opacity-30 border-2 border-white`}
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.div
                initial={{ rotate: -180, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.15, duration: 0.6, type: "spring" }}
                className={`bg-gradient-to-br ${stakeholder.color} text-white p-4 rounded-xl`}
              >
                {stakeholder.icon}
              </motion.div>
              <h3 className="text-xl text-slate-800">{stakeholder.title}</h3>
            </div>

            <ul className="space-y-3">
              {stakeholder.benefits.map((benefit, benefitIndex) => (
                <motion.li
                  key={benefitIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.15 + benefitIndex * 0.1, duration: 0.4 }}
                  className="flex items-start gap-2 text-slate-700"
                >
                  <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 bg-gradient-to-r ${stakeholder.color}`}></div>
                  <span className="text-sm leading-relaxed">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-8 grid grid-cols-3 gap-4"
      >
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-4 text-center">
          <div className="text-3xl mb-1">200K+</div>
          <div className="text-sm opacity-90">Members Served</div>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg p-4 text-center">
          <div className="text-3xl mb-1">100+</div>
          <div className="text-sm opacity-90">Institutions</div>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg p-4 text-center">
          <div className="text-3xl mb-1">79 Years</div>
          <div className="text-sm opacity-90">Legacy Preserved</div>
        </div>
      </motion.div>
    </div>
  );
}
