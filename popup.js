// popup.js
function resolveDNS() {
  const domainInput = document.getElementById('domainInput').value;
  if (domainInput.trim() !== '') {
    const resolverURL = 'https://resolver.decentraweb.org/dns-query';
    const finalURL = `http://${domainInput}`;
    const resolvedURL = `${resolverURL}?name=${domainInput}&type=A`;

    fetch(resolvedURL)
      .then(response => response.json())
      .then(data => {
        const ipAddress = data.Answer[0].data;
        chrome.tabs.create({ url: finalURL });
        alert(`Resolved IP Address: ${ipAddress}`);
      })
      .catch(error => console.error('DNS Resolution Error:', error));
  }
}
