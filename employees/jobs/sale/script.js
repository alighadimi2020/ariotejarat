const form = document.getElementById("warehouseForm");
const message = document.getElementById("formMessage");

const TELEGRAM_ENDPOINT = "YOUR_TELEGRAM_WORKER_URL";

form.addEventListener("submit", async (event) => {

    event.preventDefault();

    const submitButton = form.querySelector(".submit-button");

    submitButton.disabled = true;
    submitButton.innerHTML = "در حال ارسال...";

    message.className = "form-message";
    message.textContent = "";

    const formData = new FormData(form);

    formData.append("position", "انباردار");

    try {

        const response = await fetch(TELEGRAM_ENDPOINT, {
            method: "POST",
            body: formData
        });

        const result = await response.json();

        if (!response.ok || !result.success) {
            throw new Error("ارسال ناموفق بود");
        }

        form.reset();

        message.className = "form-message success";

        message.textContent =
            "درخواست شما با موفقیت ارسال شد. از شما بابت تکمیل فرم سپاسگزاریم.";

        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });

    } catch (error) {

        message.className = "form-message error";

        message.textContent =
            "ارسال درخواست انجام نشد. لطفاً دوباره تلاش کنید.";

    } finally {

        submitButton.disabled = false;

        submitButton.innerHTML =
            'ارسال درخواست استخدام <span>←</span>';

    }

});