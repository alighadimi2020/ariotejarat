let deferredPrompt = null;

const installButton = document.getElementById("installApp");

window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();

    deferredPrompt = event;

    installButton.classList.add("install-ready");
});

installButton.addEventListener("click", async () => {

    if (!deferredPrompt) {
        alert(
            "گزینه نصب فعلاً توسط مرورگر در دسترس نیست. اگر قبلاً اپ را نصب کرده‌اید، از همان نسخه استفاده کنید."
        );

        return;
    }

    deferredPrompt.prompt();

    const result = await deferredPrompt.userChoice;

    if (result.outcome === "accepted") {
        installButton.classList.remove("install-ready");
    }

    deferredPrompt = null;
});

window.addEventListener("appinstalled", () => {
    deferredPrompt = null;
});