const lucide = require('lucide-react');
const icons = ['Activity', 'Brain', 'Ear', 'ShieldCheck', 'Target', 'TrendingUp', 'Zap', 'ChevronRight', 'CheckCircle2'];
let missing = [];
for (let icon of icons) {
  if (!lucide[icon]) {
    missing.push(icon);
  }
}
console.log('Missing icons:', missing);
