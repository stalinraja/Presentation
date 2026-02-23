import { motion } from 'motion/react';
import { Database, Network, Shield, Layers } from 'lucide-react';

export function TechnicalArchitectureSlide() {
  const architectureItems = [
    {
      icon: <Database className="w-10 h-10" />,
      title: 'The Core',
      subtitle: 'Centralized Monolith Database',
      description: 'SQL-based system to ensure data consistency across all 6 councils.',
      color: 'from-blue-500 to-blue-600',
      position: 'top'
    },
    {
      icon: <Network className="w-10 h-10" />,
      title: 'The Interface',
      subtitle: 'Micro-services Web Applications',
      description: '"Matrimony" and "Finance" tools run independently; updates to one don\'t affect the other.',
      color: 'from-purple-500 to-purple-600',
      position: 'middle'
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Security',
      subtitle: 'Role-Based Access Control (RBAC)',
      description: 'Clergy see their Parish data; a Bishop sees the Diocesan overview.',
      color: 'from-green-500 to-green-600',
      position: 'bottom'
    }
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-slate-50 to-blue-50 p-12">
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-3">
          <Layers className="w-8 h-8 text-purple-600" />
          <h2 className="text-4xl text-slate-800">The "How"</h2>
        </div>
        <p className="text-xl text-slate-600 mb-10">Technical Architecture</p>
      </motion.div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200 p-6 mb-10 rounded-xl"
      >
        <p className="text-lg text-slate-700 leading-relaxed text-center">
          We will employ a <span className="font-bold text-purple-600">Hybrid Architecture</span>{' '}
          designed for stability and scalability
        </p>
      </motion.div>

      <div className="space-y-6 relative">
        {/* Connection lines */}
        <div className="absolute left-[72px] top-[120px] bottom-[120px] w-0.5 bg-gradient-to-b from-blue-300 via-purple-300 to-green-300"></div>

        {architectureItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 + index * 0.2, duration: 0.7 }}
            className="relative"
          >
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all border-l-4 border-transparent hover:border-purple-500">
              <div className="flex items-start gap-5">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.2, duration: 0.5, type: "spring" }}
                  className={`bg-gradient-to-br ${item.color} text-white p-4 rounded-xl flex-shrink-0 relative z-10`}
                >
                  {item.icon}
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-2xl text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-lg text-purple-600 mb-2">{item.subtitle}</p>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="mt-10 flex items-center justify-center gap-3"
      >
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="text-sm text-slate-700">Stable</span>
        </div>
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
          <span className="text-sm text-slate-700">Scalable</span>
        </div>
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-sm text-slate-700">Secure</span>
        </div>
      </motion.div>
    </div>
  );
}
