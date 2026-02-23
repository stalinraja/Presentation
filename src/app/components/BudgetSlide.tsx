import { motion } from 'motion/react';
import { DollarSign, PieChart } from 'lucide-react';
import { Cell, Pie, PieChart as RechartsPieChart, ResponsiveContainer, Legend, Tooltip } from 'recharts';

export function BudgetSlide() {
  const budgetData = [
    { phase: 'Phase 1', focus: 'Team Hiring & Server Setup', allocation: 30, color: '#3b82f6' },
    { phase: 'Phase 2', focus: 'Software Dev & Finance Integration', allocation: 35, color: '#10b981' },
    { phase: 'Phase 3', focus: 'Data Entry, Archiving & Property', allocation: 20, color: '#a855f7' },
    { phase: 'Phase 4', focus: 'Training, Testing & Launch', allocation: 15, color: '#f59e0b' }
  ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        className="text-sm font-bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="h-full w-full bg-gradient-to-br from-slate-50 to-blue-50 p-4 md:p-12">
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-3">
          <DollarSign className="w-8 h-8 text-green-600" />
          <h2 className="text-2xl md:text-4xl text-slate-800">Budget Structure</h2>
        </div>
        <p className="text-lg md:text-xl text-slate-600">Estimated Budgetary Allocation</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8">
        {/* Chart */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <PieChart className="w-5 h-5 text-slate-600" />
            <h3 className="text-lg text-slate-700">Budget Distribution</h3>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <RechartsPieChart>
              <Pie
                data={budgetData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={100}
                fill="#8884d8"
                dataKey="allocation"
              >
                {budgetData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </RechartsPieChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h3 className="text-lg text-slate-700 mb-4">Phase-wise Breakdown</h3>
          <div className="space-y-3">
            {budgetData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                className="border-l-4 pl-4 py-2"
                style={{ borderColor: item.color }}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-slate-800">{item.phase}</span>
                  <span className="text-lg font-bold" style={{ color: item.color }}>
                    {item.allocation}%
                  </span>
                </div>
                <div className="text-xs text-slate-600">{item.focus}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-r-xl p-6"
      >
        <div className="flex items-start gap-3">
          <div className="bg-amber-500 text-white p-2 rounded-lg">
            <DollarSign className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-lg text-slate-800 mb-2">Critical Investment Focus</h4>
            <p className="text-slate-700 leading-relaxed">
              The <span className="font-bold text-amber-700">Digital Operations Team</span> is the most critical 
              investment. This internal team ensures the Diocese isn't perpetually dependent on external vendors, 
              keeping the data "in-house" and secure.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="mt-6 flex justify-center gap-4"
      >
        <div className="bg-white px-6 py-3 rounded-full shadow-md text-center">
          <div className="text-2xl text-green-600">35%</div>
          <div className="text-xs text-slate-600">Largest Allocation</div>
        </div>
        <div className="bg-white px-6 py-3 rounded-full shadow-md text-center">
          <div className="text-2xl text-blue-600">24 Months</div>
          <div className="text-xs text-slate-600">Total Timeline</div>
        </div>
      </motion.div>
    </div>
  );
}
