const translations = {
    pt: {
        manifesto: "Privacidade absoluta. Anonimato implacável. Criptografia de nível militar.",
        labelSecurity: "Segurança",
        titleSecurity: "P2P Real",
        descSecurity: "No BOO, o tráfego é Peer-to-Peer. Suas mensagens viajam por um tubo direto (WebRTC) entre dispositivos. Sem nuvens, sem rastros.",
        labelEncryption: "Criptografia",
        titleEncryption: "Ed25519 & AES 256",
        descEncryption: "Cada letra é trancada antes de sair do seu celular. Nem mesmo nós conseguimos ler. Você detém as chaves.",
        labelIdentity: "Identidade",
        titleIdentity: "Só 12 Palavras",
        descIdentity: "Sem SMS, e-mail ou telefone. Sua identidade é baseada em uma frase semente (BIP-39). Pura matemática, zero burocracia.",
        btnDownload: "DOWNLOAD v1.2",
        footerNote: "Comprometido com a liberdade de comunicação."
    },
    en: {
        manifesto: "Absolute privacy. Relentless anonymity. Military-grade encryption.",
        labelSecurity: "Security",
        titleSecurity: "True P2P",
        descSecurity: "In BOO, traffic is Peer-to-Peer. Your messages travel through a direct tunnel (WebRTC) between devices. No clouds, no traces.",
        labelEncryption: "Encryption",
        titleEncryption: "Ed25519 & AES 256",
        descEncryption: "Every character is locked before leaving your phone. Not even we can read it. You hold the keys.",
        labelIdentity: "Identity",
        titleIdentity: "Just 12 Words",
        descIdentity: "No SMS, email, or phone numbers. Your identity is based on a seed phrase (BIP-39). Pure Math, zero bureaucracy.",
        btnDownload: "DOWNLOAD v1.2",
        footerNote: "Committed to freedom of communication."
    },
    es: {
        manifesto: "Privacidad absoluta. Anonimato implacable. Cifrado de nivel militar.",
        labelSecurity: "Seguridad",
        titleSecurity: "P2P Real",
        descSecurity: "En BOO, el tráfico es Peer-to-Peer. Tus mensajes viajan por un túnel directo (WebRTC) entre dispositivos. Sin nubes, sin rastros.",
        labelEncryption: "Cifrado",
        titleEncryption: "Ed25519 & AES 256",
        descEncryption: "Cada carácter se bloquea antes de salir del móvil. Ni siquiera nosotros podemos leerlo. Tú tienes las llaves.",
        labelIdentity: "Identidad",
        titleIdentity: "Solo 12 Palabras",
        descIdentity: "Sin SMS, correo ni teléfono. Tu identidad se basa en una frase semilla (BIP-39). Matemática pura, cero burocracia.",
        btnDownload: "DESCARGAR v1.2",
        footerNote: "Comprometidos con la libertad de comunicación."
    }
};

function setLang(lang) {
    const data = translations[lang];
    
    document.getElementById('manifesto-hook').innerText = data.manifesto;
    document.getElementById('label-security').innerText = data.labelSecurity;
    document.getElementById('title-security').innerText = data.titleSecurity;
    document.getElementById('desc-security').innerText = data.descSecurity;
    document.getElementById('label-encryption').innerText = data.labelEncryption;
    document.getElementById('title-encryption').innerText = data.titleEncryption;
    document.getElementById('desc-encryption').innerText = data.descEncryption;
    document.getElementById('label-identity').innerText = data.labelIdentity;
    document.getElementById('title-identity').innerText = data.titleIdentity;
    document.getElementById('desc-identity').innerText = data.descIdentity;
    document.getElementById('btn-download').innerText = data.btnDownload;
    document.getElementById('footer-note').innerText = data.footerNote;

    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.innerText.toLowerCase() === lang) {
            btn.classList.add('active');
        }
    });
}

// Fade in animation for the panel
window.addEventListener('DOMContentLoaded', () => {
    const panel = document.querySelector('.dossier-panel');
    panel.style.opacity = '0';
    panel.style.transform = 'translateY(50px)';
    panel.style.transition = 'all 1.2s cubic-bezier(0.19, 1, 0.22, 1)';
    
    setTimeout(() => {
        panel.style.opacity = '1';
        panel.style.transform = 'translateY(0)';
    }, 500);
});
