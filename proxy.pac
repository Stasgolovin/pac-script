// =============================================================================
// PAC-скрипт (Proxy Auto-Configuration)
// Версия: 2.2
// Прокси: 89.125.213.6:3128
// Обновлён с учётом российских IP-блокировок (Роскомнадзор)
// =============================================================================

function FindProxyForURL(url, host) {

  var proxy = "PROXY 89.125.213.6:3128";
  host = host.toLowerCase();

  // =========================================================================
  // 1. ЛОКАЛЬНЫЕ АДРЕСА — всегда напрямую, без прокси
  // =========================================================================

  if (
    isPlainHostName(host) ||
    dnsDomainIs(host, ".local") ||
    dnsDomainIs(host, ".localhost") ||
    host === "localhost" ||
    isInNet(host, "127.0.0.0", "255.0.0.0") ||
    isInNet(host, "10.0.0.0", "255.0.0.0") ||
    isInNet(host, "172.16.0.0", "255.240.0.0") ||
    isInNet(host, "192.168.0.0", "255.255.0.0") ||
    isInNet(host, "169.254.0.0", "255.255.0.0") ||
    isInNet(host, "100.64.0.0", "255.192.0.0")
  ) {
    return "DIRECT";
  }

  // =========================================================================
  // 2. TELEGRAM — IP-диапазоны (блокируется по IP, не по домену)
  // =========================================================================

  var resolvedIp = dnsResolve(host);

  if (resolvedIp) {
    if (isInNet(resolvedIp, "149.154.160.0", "255.255.240.0")) return proxy;
    if (isInNet(resolvedIp, "91.108.4.0", "255.255.252.0")) return proxy;
    if (isInNet(resolvedIp, "91.108.8.0", "255.255.252.0")) return proxy;
    if (isInNet(resolvedIp, "91.108.16.0", "255.255.252.0")) return proxy;
    if (isInNet(resolvedIp, "91.108.56.0", "255.255.252.0")) return proxy;
    if (isInNet(resolvedIp, "95.161.64.0", "255.255.240.0")) return proxy;
    if (isInNet(resolvedIp, "67.198.55.0", "255.255.255.0")) return proxy;
  }

  // Telegram домены
  if (
    dnsDomainIs(host, ".telegram.org") || host === "telegram.org" ||
    dnsDomainIs(host, ".t.me") || host === "t.me" ||
    dnsDomainIs(host, ".tdesktop.com") || host === "tdesktop.com" ||
    dnsDomainIs(host, ".telegram.me") || host === "telegram.me"
  ) {
    return proxy;
  }

  // =========================================================================
  // 3. WHATSAPP
  // =========================================================================

  if (
    dnsDomainIs(host, ".whatsapp.com") || host === "whatsapp.com" ||
    dnsDomainIs(host, ".whatsapp.net") || host === "whatsapp.net"
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
    dnsDomainIs(host, ".youtube-nocookie.com") || host === "youtube-nocookie.com"
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
  if (
    dnsDomainIs(host, ".requesty.ai") || host === "requesty.ai"
  ) {
    return proxy;
  }

  // Cursor AI
  if (
    dnsDomainIs(host, ".cursor.sh") || host === "cursor.sh" ||
    dnsDomainIs(host, ".cursor.com") || host === "cursor.com"
  ) {
    return proxy;
  }

  // =========================================================================
  // 6. GITHUB / РАЗРАБОТКА
  // =========================================================================

  if (
    dnsDomainIs(host, ".github.com") || host === "github.com" ||
    dnsDomainIs(host, ".githubusercontent.com") || host === "githubusercontent.com" ||
    dnsDomainIs(host, ".githubassets.com") || host === "githubassets.com" ||
    dnsDomainIs(host, ".npmjs.com") || host === "npmjs.com" ||
    dnsDomainIs(host, ".pypi.org") || host === "pypi.org" ||
    dnsDomainIs(host, ".files.pythonhosted.org") || host === "files.pythonhosted.org"
  ) {
    return proxy;
  }

  // =========================================================================
  // 7. MICROSOFT / COPILOT
  // =========================================================================

  if (
    host === "copilot.microsoft.com" ||
    dnsDomainIs(host, ".copilot.microsoft.com")
  ) {
    return proxy;
  }

  // =========================================================================
  // 8. GOOGLE СЕРВИСЫ
  // =========================================================================

  if (
    dnsDomainIs(host, ".google.com") || host === "google.com" ||
    dnsDomainIs(host, ".googleapis.com") || host === "googleapis.com" ||
    dnsDomainIs(host, ".gstatic.com") || host === "gstatic.com"
  ) {
    return proxy;
  }

  // =========================================================================
  // 9. ПРОЧЕЕ
  // =========================================================================

  // 2ip
  if (
    dnsDomainIs(host, ".2ip.ru") || host === "2ip.ru"
  ) {
    return proxy;
  }

  // =========================================================================
  // DEFAULT — всё остальное напрямую
  // =========================================================================

  return "DIRECT";
}