/** Serialize only the visible enquiry fields into a user-reviewed email draft. */
export function buildEnquiryEmail(recipient: string, data: FormData): string {
  const labels: Record<string, string> = {
    name: 'Name', email: 'Email', organisation: 'Organisation', enquiry: 'Enquiry',
    expertise: 'Expertise', motive: 'Contribution', message: 'Message',
  };
  const subject = encodeURIComponent(String(data.get('_subject') || 'Vuka enquiry'));
  const body = Object.entries(labels)
    .filter(([key]) => data.has(key) && String(data.get(key)).trim())
    .map(([key, label]) => `${label}: ${String(data.get(key)).trim()}`)
    .join('\n\n');
  return `mailto:${recipient}?subject=${subject}&body=${encodeURIComponent(body)}`;
}
