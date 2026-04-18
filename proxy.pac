// =============================================================================
// PAC-скрипт (Proxy Auto-Configuration)
// Версия: 2.4
// Прокси: 89.125.213.6:3128
// Совместимость: Android, iOS, Desktop
// =============================================================================

function FindProxyForURL(url, host) {

  var proxy = "PROXY 89.125.213.6:3128";
  host = host.toLowerCase();

  // =========================================================================
  // 1. ЛОКАЛЬНЫЕ АДРЕСА — всегда напрямую
  // =========================================================================

  if (
    isPlainHostName(host) ||
    dnsDomainIs(host, ".local") ||
    dnsDomainIs(host, ".localhost") ||
    host === "localhost"
  ) {
    return "DIRECT";
  }

  // =========================================================================
  // 2. TELEGRAM — все домены (Android не поддерживает dnsResolve)
  // =========================================================================

  if (
    dnsDomainIs(host, ".telegram.org") || host === "telegram.org" ||
    dnsDomainIs(host, ".t.me") || host === "t.me" ||
    dnsDomainIs(host, ".tdesktop.com") || host === "tdesktop.com" ||
    dnsDomainIs(host, ".telegram.me") || host === "telegram.me" ||
    dnsDomainIs(host, ".telesco.pe") || host === "telesco.pe" ||
    dnsDomainIs(host, ".tg.dev") || host === "tg.dev" ||
    dnsDomainIs(host, ".telegram.dog") || host === "telegram.dog" ||
    dnsDomainIs(host, ".tgraph.io") || host === "tgraph.io" ||
    dnsDomainIs(host, ".graph.org") || host === "graph.org" ||
    dnsDomainIs(host, ".telegra.ph") || host === "telegra.ph" ||
    host === "web.telegram.org" ||
    host === "desktop.telegram.org" ||
    host === "mac.telegram.org" ||
    host === "apps.telegram.org" ||
    host === "contest.com" ||
    host === "contest.dev"
  ) {
    return proxy;
  }

  // =========================================================================
  // 3. WHATSAPP
  // =========================================================================

  if (
    dnsDomainIs(host, ".whatsapp.com") || host === "whatsapp.com" ||
    dnsDomainIs(host, ".whatsapp.net") || host === "whatsapp.net" ||
    dnsDomainIs(host, ".wa.me") || host === "wa.me"
  ) {
    return proxy;
  }

  // =========================================================================
  // 4. YOUTUBE
  // =========================================================================

  if (
    dnsDomainIs(host, ".youtube.com") || host === "youtube.com" ||
    dnsDomainIs(host, ".youtu.be") || host === "youtu.be" ||
    dnsDomainIs(host, ".googlevideo.com") || host === "googlevideo.com" ||
    dnsDomainIs(host, ".ytimg.com") || host === "ytimg.com" ||
    dnsDomainIs(host, ".youtube-nocookie.com") || host === "youtube-nocookie.com" ||
    dnsDomainIs(host, ".youtubei.googleapis.com")
  ) {
    return proxy;
  }

  // =========================================================================
  // 5. AI-СЕРВИСЫ
  // =========================================================================

  // OpenAI / ChatGPT
  if (
    dnsDomainIs(host, ".openai.com") || host === "openai.com" ||
    dnsDomainIs(host, ".chatgpt.com") || host === "chatgpt.com" ||
    dnsDomainIs(host, ".oaistatic.com") || host === "oaistatic.com" ||
    dnsDomainIs(host, ".oaiusercontent.com") || host === "oaiusercontent.com"
  ) {
    return proxy;
  }

  // Anthropic / Claude
  if (
    dnsDomainIs(host, ".anthropic.com") || host === "anthropic.com" ||
    dnsDomainIs(host, ".claude.ai") || host === "claude.ai"
  ) {
    return proxy;
  }

  // Google Gemini / AI Studio
  if (
    host === "gemini.google.com" ||
    host === "aistudio.google.com" ||
    host === "makersuite.google.com"
  ) {
    return proxy;
  }

  // Requesty
  if (dnsDomainIs(host, ".requesty.ai") || host === "requesty.ai") {
    return proxy;
  }

  // Cursor
  if (
    dnsDomainIs(host, ".cursor.sh") || host === "cursor.sh" ||
    dnsDomainIs(host, ".cursor.com") || host === "cursor.com"
  ) {
    return proxy;
  }

  // Perplexity
  if (dnsDomainIs(host, ".perplexity.ai") || host === "perplexity.ai") {
    return proxy;
  }

  // HuggingFace
  if (dnsDomainIs(host, ".huggingface.co") || host === "huggingface.co") {
    return proxy;
  }

  // Midjourney
  if (dnsDomainIs(host, ".midjourney.com") || host === "midjourney.com") {
    return proxy;
  }

  // Stability AI
  if (dnsDomainIs(host, ".stability.ai") || host === "stability.ai") {
    return proxy;
  }

  // =========================================================================
  // 6. GITHUB / DEV / PYPI
  // =========================================================================

  if (
    dnsDomainIs(host, ".github.com") || host === "github.com" ||
    dnsDomainIs(host, ".githubusercontent.com") || host === "githubusercontent.com" ||
    dnsDomainIs(host, ".githubassets.com") || host === "githubassets.com" ||
    dnsDomainIs(host, ".github.io") ||
    dnsDomainIs(host, ".npmjs.com") || host === "npmjs.com" ||
    dnsDomainIs(host, ".pypi.org") || host === "pypi.org" ||
    dnsDomainIs(host, ".files.pythonhosted.org") || host === "files.pythonhosted.org" ||
    dnsDomainIs(host, ".gitlab.com") || host === "gitlab.com"
  ) {
    return proxy;
  }

  // =========================================================================
  // 7. MICROSOFT / COPILOT / AZURE
  // =========================================================================

  if (
    host === "copilot.microsoft.com" ||
    dnsDomainIs(host, ".copilot.microsoft.com") ||
    dnsDomainIs(host, ".azure.com") || host === "azure.com" ||
    dnsDomainIs(host, ".azureedge.net") || host === "azureedge.net" ||
    dnsDomainIs(host, ".microsoftonline.com") || host === "microsoftonline.com" ||
    dnsDomainIs(host, ".windows.net") || host === "windows.net"
  ) {
    return proxy;
  }

  // =========================================================================
  // 8. GOOGLE / GOOGLE CLOUD / PLAY STORE
  // =========================================================================

  if (
    dnsDomainIs(host, ".google.com") || host === "google.com" ||
    dnsDomainIs(host, ".googleapis.com") || host === "googleapis.com" ||
    dnsDomainIs(host, ".gstatic.com") || host === "gstatic.com" ||
    dnsDomainIs(host, ".cloud.google.com") || host === "cloud.google.com" ||
    dnsDomainIs(host, ".play.google.com") || host === "play.google.com"
  ) {
    return proxy;
  }

  // =========================================================================
  // 9. NETFLIX
  // =========================================================================

  if (
    dnsDomainIs(host, ".netflix.com") || host === "netflix.com" ||
    dnsDomainIs(host, ".nflxvideo.net") || host === "nflxvideo.net" ||
    dnsDomainIs(host, ".nflximg.net") || host === "nflximg.net" ||
    dnsDomainIs(host, ".nflxso.net") || host === "nflxso.net" ||
    dnsDomainIs(host, ".nflxext.com")
  ) {
    return proxy;
  }

  // =========================================================================
  // 10. DOCKER
  // =========================================================================

  if (
    dnsDomainIs(host, ".docker.com") || host === "docker.com" ||
    dnsDomainIs(host, ".docker.io") || host === "docker.io"
  ) {
    return proxy;
  }

  // =========================================================================
  // 11. CLOUDFLARE
  // =========================================================================

  if (
    dnsDomainIs(host, ".cloudflare.com") || host === "cloudflare.com" ||
    dnsDomainIs(host, ".cloudflare-dns.com") || host === "cloudflare-dns.com" ||
    dnsDomainIs(host, ".cf-ipfs.com") || host === "cf-ipfs.com"
  ) {
    return proxy;
  }

  // =========================================================================
  // 12. INSTAGRAM
  // =========================================================================

  if (
    dnsDomainIs(host, ".instagram.com") || host === "instagram.com" ||
    dnsDomainIs(host, ".cdninstagram.com") ||
    dnsDomainIs(host, ".instagr.am") || host === "instagr.am"
  ) {
    return proxy;
  }

  // =========================================================================
  // 13. ПРОЧЕЕ
  // =========================================================================

  if (dnsDomainIs(host, ".2ip.ru") || host === "2ip.ru") {
    return proxy;
  }

  // =========================================================================
  // DEFAULT — всё остальное напрямую
  // =========================================================================

  return "DIRECT";
}