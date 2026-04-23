'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      subject: (form.elements.namedItem('subject') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        setErrorMsg(json.error ?? 'Something went wrong.');
        setStatus('error');
      } else {
        setStatus('success');
      }
    } catch {
      setErrorMsg('Network error. Please try again.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="py-12">
        <h3 className="font-display text-2xl text-white mb-2">Message sent.</h3>
        <p className="text-sm text-muted">
          We&apos;ll get back to you. Stay posted.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <Input id="name" name="name" label="Name" placeholder="Your name" required />
      <Input
        id="email"
        name="email"
        label="Email"
        type="email"
        placeholder="your@email.com"
        required
      />
      <Input
        id="subject"
        name="subject"
        label="Subject"
        placeholder="What's this about?"
        required
      />
      <Textarea
        id="message"
        name="message"
        label="Message"
        placeholder="Tell us what's on your mind"
        required
      />
      {status === 'error' && (
        <p className="text-sm text-blood">{errorMsg}</p>
      )}
      <Button type="submit" size="lg" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
