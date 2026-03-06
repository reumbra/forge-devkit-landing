# Forge DevKit Landing — Backlog

## GDPR Compliance [epic:gdpr]

> Landing page hosted on Cloudflare Pages. No direct data collection (no forms, no analytics, no cookies).
> Third parties: Cloudflare (CDN/hosting), LemonSqueezy (payment overlay).

### Legal Pages
- [ ] Verify `/privacy` page covers: Cloudflare data processing (IP, UA, referrer), LemonSqueezy payment data, Resend email delivery
- [ ] Verify `/terms` page is current
- [ ] Add subprocessor list to Privacy Policy: AWS, Supabase, Cloudflare, LemonSqueezy, Resend
- [ ] Document Cloudflare log retention period in Privacy Policy

### DPA
- [ ] Verify Cloudflare DPA signed (Cloudflare Pages hosting)
- [ ] Verify LemonSqueezy DPA / MoR agreement covers EU GDPR

### Analytics (when implemented)
- [ ] Use privacy-respecting analytics (Plausible or Cloudflare Web Analytics)
- [ ] If cookie-based analytics added: implement consent banner
- [ ] Document analytics in Privacy Policy
