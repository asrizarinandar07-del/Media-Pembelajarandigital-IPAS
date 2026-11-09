const fs = require('fs');
const esbuild = require('esbuild');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let transformed = esbuild.transformSync(content, {
    loader: filePath.endsWith('.tsx') ? 'tsx' : 'ts',
    jsx: 'preserve',
    format: 'esm'
  }).code;
  // Remove import statements
  transformed = transformed.replace(/^import\s+[\s\S]*?from\s+['"][^'"]+['"];?/gm, '');
  // Remove export blocks and keywords
  transformed = transformed.replace(/^export\s*\{[^}]*\}\s*;?/gm, '');
  transformed = transformed.replace(/^export\s+(default\s+)?/gm, '');
  return transformed;
}

// Icon dictionary
const iconComponent = `
const Icon = ({ name, className = "w-4 h-4" }) => {
  const icons = {
    School: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m4 6 8-4 8 4"/><path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"/><path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4"/><path d="M18 5v17"/><path d="M6 5v17"/><circle cx="12" cy="9" r="2"/></svg>
    ),
    GraduationCap: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.42 10.922a1 1 0 0 0-.019-.838L12.83 3.18a2 2 0 0 0-1.66 0L2.6 10.084a1 1 0 0 0 0 1.832l8.57 6.908a2 2 0 0 0 1.66 0l8.57-6.908a1 1 0 0 0 .02-.994"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>
    ),
    User: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    ),
    KeyRound: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"/><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"/></svg>
    ),
    LogOut: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
    ),
    BookOpen: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
    ),
    BookOpenCheck: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/><path d="m16 12 2 2 4-4"/></svg>
    ),
    Layers: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
    ),
    HelpCircle: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
    ),
    Award: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
    ),
    FileText: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
    ),
    Sliders: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="4" y1="21" y2="14"/><line x1="4" x2="4" y1="10" y2="3"/><line x1="12" x2="12" y1="21" y2="12"/><line x1="12" x2="12" y1="8" y2="3"/><line x1="20" x2="20" y1="21" y2="16"/><line x1="20" x2="20" y1="12" y2="3"/><line x1="1" x2="7" y1="14" y2="14"/><line x1="9" x2="15" y1="8" y2="8"/><line x1="17" x2="23" y1="16" y2="16"/></svg>
    ),
    CheckCircle2: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
    ),
    XCircle: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
    ),
    RotateCcw: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"/><path d=\"M3 3v5h5\"/></svg>
    ),
    Printer: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/></svg>
    ),
    Download: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
    ),
    Search: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
    ),
    Filter: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
    ),
    Sparkles: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
    ),
    Clock: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    ),
    AlertTriangle: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>
    ),
    AlertCircle: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
    ),
    ArrowRight: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
    ),
    ArrowLeft: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
    ),
    Send: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
    ),
    Check: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
    ),
    BookmarkCheck: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"/><path d="m9 10 2 2 4-4"/></svg>
    ),
    ShieldAlert: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
    ),
    ShieldCheck: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
    ),
    Split: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3h5v5"/><path d="m21 3-7 7"/><path d="M8 3H3v5"/><path d="m3 3 7 7"/><path d="M12 22v-8"/></svg>
    ),
    ChevronRight: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
    ),
    ChevronDown: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
    ),
    ChevronUp: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
    ),
    X: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
    ),
    Lightbulb: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
    ),
    Compass: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
    ),
    Users: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
    Target: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
    ),
    Flame: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
    ),
    Edit3: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
    ),
    Save: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"/><path d="M7 3v4a1 1 0 0 0 1 1h7"/></svg>
    ),
    CheckCircle: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
    ),
    UserCheck: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>
    ),
    FileCheck: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m9 15 2 2 4-4"/></svg>
    ),
    ThumbsUp: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h3"/><path d="M2 14h5"/></svg>
    )
  };
  return icons[name] || icons.School;
};

// Aliases for Lucide icon components
const iconNames = [
  'School', 'GraduationCap', 'User', 'KeyRound', 'LogOut', 'BookOpen', 'Layers',
  'HelpCircle', 'Award', 'FileText', 'Sliders', 'CheckCircle2', 'XCircle', 'RotateCcw',
  'Printer', 'Download', 'Search', 'Filter', 'Sparkles', 'Clock', 'AlertTriangle',
  'AlertCircle', 'ArrowRight', 'ArrowLeft', 'Send', 'Check', 'BookmarkCheck',
  'ShieldAlert', 'ShieldCheck', 'Split', 'ChevronRight', 'ChevronDown', 'ChevronUp',
  'X', 'Lightbulb', 'Compass', 'Users', 'Target', 'Flame', 'Edit3', 'Save',
  'CheckCircle', 'UserCheck', 'FileCheck', 'BookOpenCheck', 'ThumbsUp'
];

const School = (props) => <Icon name="School" {...props} />;
const GraduationCap = (props) => <Icon name="GraduationCap" {...props} />;
const User = (props) => <Icon name="User" {...props} />;
const KeyRound = (props) => <Icon name="KeyRound" {...props} />;
const LogOut = (props) => <Icon name="LogOut" {...props} />;
const BookOpen = (props) => <Icon name="BookOpen" {...props} />;
const Layers = (props) => <Icon name="Layers" {...props} />;
const HelpCircle = (props) => <Icon name="HelpCircle" {...props} />;
const Award = (props) => <Icon name="Award" {...props} />;
const FileText = (props) => <Icon name="FileText" {...props} />;
const Sliders = (props) => <Icon name="Sliders" {...props} />;
const CheckCircle2 = (props) => <Icon name="CheckCircle2" {...props} />;
const XCircle = (props) => <Icon name="XCircle" {...props} />;
const RotateCcw = (props) => <Icon name="RotateCcw" {...props} />;
const Printer = (props) => <Icon name="Printer" {...props} />;
const Download = (props) => <Icon name="Download" {...props} />;
const Search = (props) => <Icon name="Search" {...props} />;
const Filter = (props) => <Icon name="Filter" {...props} />;
const Sparkles = (props) => <Icon name="Sparkles" {...props} />;
const Clock = (props) => <Icon name="Clock" {...props} />;
const AlertTriangle = (props) => <Icon name="AlertTriangle" {...props} />;
const AlertCircle = (props) => <Icon name="AlertCircle" {...props} />;
const ArrowRight = (props) => <Icon name="ArrowRight" {...props} />;
const ArrowLeft = (props) => <Icon name="ArrowLeft" {...props} />;
const Send = (props) => <Icon name="Send" {...props} />;
const Check = (props) => <Icon name="Check" {...props} />;
const BookmarkCheck = (props) => <Icon name="BookmarkCheck" {...props} />;
const ShieldAlert = (props) => <Icon name="ShieldAlert" {...props} />;
const ShieldCheck = (props) => <Icon name="ShieldCheck" {...props} />;
const Split = (props) => <Icon name="Split" {...props} />;
const ChevronRight = (props) => <Icon name="ChevronRight" {...props} />;
const ChevronDown = (props) => <Icon name="ChevronDown" {...props} />;
const ChevronUp = (props) => <Icon name="ChevronUp" {...props} />;
const X = (props) => <Icon name="X" {...props} />;
const Lightbulb = (props) => <Icon name="Lightbulb" {...props} />;
const Compass = (props) => <Icon name="Compass" {...props} />;
const Users = (props) => <Icon name="Users" {...props} />;
const Target = (props) => <Icon name="Target" {...props} />;
const Flame = (props) => <Icon name="Flame" {...props} />;
const Edit3 = (props) => <Icon name="Edit3" {...props} />;
const Save = (props) => <Icon name="Save" {...props} />;
const CheckCircle = (props) => <Icon name="CheckCircle" {...props} />;
const UserCheck = (props) => <Icon name="UserCheck" {...props} />;
const FileCheck = (props) => <Icon name="FileCheck" {...props} />;
const BookOpenCheck = (props) => <Icon name="BookOpenCheck" {...props} />;
const ThumbsUp = (props) => <Icon name="ThumbsUp" {...props} />;

// Confetti library reference from CDN
const confetti = (options) => {
  if (typeof window.confetti === 'function') {
    window.confetti(options);
  }
};
`;

// Combine all code segments
const scriptBody = [
  'const { useState, useEffect, useMemo, useRef } = React;',
  iconComponent,
  processFile('src/data/studentsData.ts'),
  processFile('src/data/settingsData.ts'),
  processFile('src/utils/storage.ts'),
  processFile('src/data/modulesData.ts'),
  processFile('src/data/quizSubBabData.ts'),
  processFile('src/data/assessmentData.ts'),
  processFile('src/data/reflectionData.ts'),
  processFile('src/components/Header.tsx'),
  processFile('src/components/LoginModal.tsx'),
  processFile('src/components/DashboardView.tsx'),
  processFile('src/components/ModuleView.tsx'),
  processFile('src/components/QuizSubBabView.tsx'),
  processFile('src/components/AssessmentView.tsx'),
  processFile('src/components/StudentReportView.tsx'),
  processFile('src/components/TeacherRoomView.tsx'),
  processFile('src/components/SettingsView.tsx'),
  processFile('src/components/ClassRecapPrintModal.tsx'),
  processFile('src/App.tsx'),
  `
  const rootElement = document.getElementById('root');
  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<App />);
  }
  `
].join('\n\n');

// Verify JSX with esbuild to ensure 0 errors
try {
  esbuild.transformSync(scriptBody, { loader: 'jsx' });
  console.log('JSX verification PASSED with 0 errors!');
} catch (err) {
  console.error('JSX verification failed:', err.message);
  process.exit(1);
}

const fullHtml = `<!doctype html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Media Pembelajaran IPAS Kelas VI - Kearifan Lokal &amp; Persatuan Bangsa</title>
    <meta name="description" content="Media Pembelajaran Digital Interaktif Mapel IPAS Kelas VI Bab 4: Kearifan Lokal, Warisan Leluhur untuk Persatuan Bangsa. UPT SPF SD Inpres 105285 Tandam Hilir I." />
    <meta property="og:title" content="Media Pembelajaran IPAS Kelas VI - Kearifan Lokal &amp; Persatuan Bangsa" />
    <meta property="og:description" content="Media Pembelajaran Digital Interaktif Mapel IPAS Kelas VI Bab 4: Kearifan Lokal, Warisan Leluhur untuk Persatuan Bangsa. UPT SPF SD Inpres 105285 Tandam Hilir I." />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />

    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              brand: {
                50: '#f0fdf4',
                100: '#dcfce7',
                500: '#22c55e',
                600: '#16a34a',
                700: '#15803d',
                800: '#166534',
                900: '#14532d',
                950: '#052e16',
              }
            }
          }
        }
      };
    </script>

    <!-- React 18, ReactDOM 18 & Babel Standalone CDN for GitHub Pages -->
    <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <!-- Canvas Confetti CDN -->
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.4/dist/confetti.browser.min.js"></script>

    <style>
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(4px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fadeIn {
        animation: fadeIn 0.25s ease-out forwards;
      }
      /* Custom scrollbar */
      ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }
      ::-webkit-scrollbar-track {
        background: #f1f5f9;
      }
      ::-webkit-scrollbar-thumb {
        background: #cbd5e1;
        border-radius: 9999px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #94a3b8;
      }

      /* Print styles */
      @media print {
        body {
          background: white !important;
          color: black !important;
          font-size: 11pt !important;
        }
        header, nav, .print\\:hidden, button, footer {
          display: none !important;
        }
        .print\\:border-none {
          border: none !important;
        }
        .print\\:shadow-none {
          box-shadow: none !important;
        }
        .print\\:p-0 {
          padding: 0 !important;
        }
        .print\\:m-0 {
          margin: 0 !important;
        }
        @page {
          size: A4 portrait;
          margin: 1.5cm;
        }
      }
    </style>
  </head>
  <body class="bg-slate-100/70 text-slate-900 font-sans antialiased selection:bg-emerald-200 selection:text-emerald-950 min-h-screen">
    <div id="root"></div>

    <!-- Standalone React Application Code (Runs on GitHub Pages directly) -->
    <script type="text/babel">
${scriptBody}
    </script>
  </body>
</html>
`;

fs.writeFileSync('index.html', fullHtml, 'utf8');
console.log('Successfully written standalone index.html (' + fullHtml.length + ' bytes).');
