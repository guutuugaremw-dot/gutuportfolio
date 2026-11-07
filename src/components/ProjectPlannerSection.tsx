import React, { useState } from 'react';
import { Mail, Send, Calendar, Check, Copy, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { GUTU_PROFILE } from '../data/portfolioData';

export const ProjectPlannerSection: React.FC = () => {
  const [projectScope, setProjectScope] = useState('Full Web Application UI/UX');
  const [timeline, setTimeline] = useState('1–2 Months');
  const [budgetTier, setBudgetTier] = useState('30,000 Birr');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [projectNotes, setProjectNotes] = useState('');
  const [submittedBrief, setSubmittedBrief] = useState(false);
  const [copiedBrief, setCopiedBrief] = useState(false);

  // Strategy Call simulation
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [bookedCall, setBookedCall] = useState(false);

  const scopeOptions = [
    'Full Web Application UI/UX',
    'Design System & Component Token Core',
    'SaaS Product Redesign & Audit',
    'Mobile & Tablet Application Design',
    'High-Conversion E-Commerce Flagship',
  ];

  const timelineOptions = ['2–4 Weeks (Sprint)', '1–2 Months (Standard)', '3+ Months (Strategic)'];
  const budgetOptions = ['20,000 Birr', '30,000 Birr', '50,000+ Birr'];

  const availableSlots = [
    'Tuesday · 10:00 AM UTC',
    'Tuesday · 02:00 PM UTC',
    'Wednesday · 11:30 AM UTC',
    'Thursday · 04:00 PM UTC',
  ];

  const inquirySummary = `Subject: New Project Inquiry for Gutu — ${projectScope}

Hello Gutu,

I would like to explore working together on a design engineering project.

Project Scope: ${projectScope}
Target Timeline: ${timeline}
Budget Tier: ${budgetTier}
Client Name: ${clientName || 'Partner'}
Client Contact: ${clientEmail || 'Pending'}

Project Overview:
${projectNotes || 'Looking to discuss requirements and product architecture during an introductory consultation.'}
`;

  const mailtoUrl = `mailto:${GUTU_PROFILE.email}?subject=${encodeURIComponent(
    `Project Inquiry: ${projectScope} (${clientName || 'New Client'})`
  )}&body=${encodeURIComponent(inquirySummary)}`;

  const handleCopyBrief = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(inquirySummary);
        setCopiedBrief(true);
        setTimeout(() => setCopiedBrief(false), 2000);
      } else {
        throw new Error('Clipboard fallback');
      }
    } catch {
      try {
        const textArea = document.createElement('textarea');
        textArea.value = inquirySummary;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setCopiedBrief(true);
        setTimeout(() => setCopiedBrief(false), 2000);
      } catch (err) {
        console.warn('Copy brief prevented:', err);
      }
    }
  };

  const handleBookSlot = (slot: string) => {
    setSelectedSlot(slot);
    setBookedCall(true);
    setTimeout(() => {
      // Keep booked state visible
    }, 500);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200 dark:border-slate-800">
      
      {/* Section Header */}
      <div className="mb-14">
        <div className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 font-semibold">
          Initiate Engagement
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
          Interactive Project Inquiry & Consultation
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
          Configure your product scope, timeline, and deliverables to generate a customized design brief or schedule an introductory strategy session.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Interactive Inquiry Configurator */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6">
          
          {/* Step 1: Scope */}
          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2.5 font-semibold">
              01. Select Project Discipline
            </label>
            <div className="flex flex-wrap gap-2">
              {scopeOptions.map(option => (
                <button
                  key={option}
                  onClick={() => setProjectScope(option)}
                  className={`px-3 py-2 text-xs font-medium rounded-lg border transition-all text-left ${
                    projectScope === option
                      ? 'bg-blue-600 text-white border-blue-500 shadow-sm'
                      : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-300'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Timeline & Budget */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2 font-semibold">
                02. Target Timeline
              </label>
              <div className="space-y-1.5">
                {timelineOptions.map(opt => (
                  <button
                    key={opt}
                    onClick={() => setTimeline(opt)}
                    className={`w-full py-2 px-3 text-xs rounded-lg border text-left transition-all ${
                      timeline === opt
                        ? 'bg-blue-950/70 border-blue-500 text-blue-300 font-semibold'
                        : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2 font-semibold">
                03. Estimated Budget
              </label>
              <div className="space-y-1.5">
                {budgetOptions.map(opt => (
                  <button
                    key={opt}
                    onClick={() => setBudgetTier(opt)}
                    className={`w-full py-2 px-3 text-xs rounded-lg border text-left transition-all ${
                      budgetTier === opt
                        ? 'bg-blue-950/70 border-blue-500 text-blue-300 font-semibold'
                        : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Step 3: Contact Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="text-xs text-slate-600 dark:text-slate-400 block mb-1">
                Your Name / Organization
              </label>
              <input
                type="text"
                value={clientName}
                onChange={e => setClientName(e.target.value)}
                placeholder="e.g. Alex Morgan · Acme Tech"
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg text-xs text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="text-xs text-slate-600 dark:text-slate-400 block mb-1">
                Your Email Address
              </label>
              <input
                type="email"
                value={clientEmail}
                onChange={e => setClientEmail(e.target.value)}
                placeholder="alex@acme.com"
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg text-xs text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="text-xs text-slate-600 dark:text-slate-400 block mb-1">
              Project Context & Goals
            </label>
            <textarea
              rows={3}
              value={projectNotes}
              onChange={e => setProjectNotes(e.target.value)}
              placeholder="Briefly describe what you are building or redesigning, target audience, and key business goals..."
              className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg text-xs text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Submit Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <a
              href={mailtoUrl}
              onClick={() => setSubmittedBrief(true)}
              className="w-full sm:w-auto flex-1 py-2.5 px-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg text-xs transition-colors flex items-center justify-center gap-2 shadow-md shadow-blue-600/20"
            >
              <Mail className="w-4 h-4" />
              <span>Email Brief Directly to Gutu</span>
            </a>

            <button
              onClick={handleCopyBrief}
              className="w-full sm:w-auto py-2.5 px-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium rounded-lg text-xs transition-colors flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-700"
            >
              {copiedBrief ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              <span>{copiedBrief ? 'Copied Brief!' : 'Copy Brief'}</span>
            </button>
          </div>

          {submittedBrief && (
            <p className="text-xs text-emerald-600 dark:text-emerald-400 font-mono text-center">
              Opening your default email client with preformatted parameters for Gutu ({GUTU_PROFILE.email}).
            </p>
          )}

        </div>

        {/* Right Column: Direct Channels & Strategy Call Picker */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Direct Contact Card */}
          <div className="bg-white dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-slate-400 font-semibold">
              <Mail className="w-4 h-4 text-blue-500" />
              <span>Direct Studio Email</span>
            </div>

            <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block">Personal Inbox:</span>
              <a
                href={`mailto:${GUTU_PROFILE.email}`}
                className="text-sm sm:text-base font-mono font-bold text-blue-600 dark:text-blue-400 hover:underline break-all"
              >
                {GUTU_PROFILE.email}
              </a>
            </div>

            <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1 leading-relaxed">
              <div className="flex items-center justify-between">
                <span>Response Time:</span>
                <span className="font-mono text-slate-900 dark:text-slate-200">Within 24 Hours</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Location:</span>
                <span className="text-slate-900 dark:text-slate-200">{GUTU_PROFILE.location}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Status:</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-medium">Accepting New Projects</span>
              </div>
            </div>
          </div>

          {/* Simulated 30-min Strategy Call Picker */}
          <div className="bg-white dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-7">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-slate-400 font-semibold">
                <Calendar className="w-4 h-4 text-blue-500" />
                <span>Book 30-Min Strategy Call</span>
              </div>
              <span className="text-[10px] text-emerald-500 font-mono">LIVE SLOTS</span>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              Select an open calendar window to reserve an architectural discovery call with Gutu.
            </p>

            <div className="space-y-2">
              {availableSlots.map(slot => (
                <button
                  key={slot}
                  onClick={() => handleBookSlot(slot)}
                  className={`w-full py-2.5 px-3 rounded-lg border text-xs font-medium text-left flex items-center justify-between transition-all ${
                    selectedSlot === slot
                      ? 'bg-blue-600 text-white border-blue-500 shadow-sm'
                      : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{slot}</span>
                  </span>
                  <span>{selectedSlot === slot ? 'Selected' : 'Reserve'}</span>
                </button>
              ))}
            </div>

            {bookedCall && selectedSlot && (
              <div className="mt-4 p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-600/40 rounded-xl text-xs text-emerald-700 dark:text-emerald-300 flex items-start gap-2 animate-in fade-in">
                <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold block">Slot Held: {selectedSlot}</span>
                  <span>An invite confirmation will be coordinated alongside your project brief at {GUTU_PROFILE.email}.</span>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>

    </section>
  );
};
