const d = document;

export default function contactFormValidations() {
  const $form = d.querySelector(".contact-form"),
    $inputs = d.querySelectorAll(".contact-form [required]");

  $inputs.forEach((input) => {
    const $span = d.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("contact-form-error", "none");
    input.insertAdjacentElement("afterend", $span);
  });

  d.addEventListener("keyup", (e) => {
    if (e.target.matches(".contact-form [required]")) {
      let $pattern = e.target.pattern || e.target.dataset.pattern;
      if ($pattern && e.target.value !== "") {
        let regex = new RegExp($pattern);
        return !regex.exec(e.target.value)
          ? d.getElementById(e.target.name).classList.add("is-active")
          : d.getElementById(e.target.name).classList.remove("is-active");
      }

      if (!$pattern) {
        return e.target.value === ""
          ? d.getElementById(e.target.name).classList.add("is-active")
          : d.getElementById(e.target.name).classList.remove("is-active");
      }
    }
  });

  d.addEventListener("submit", (e) => {
    //e.preventDefault();
    const $loader = d.querySelector(".contact-form-loader"),
      $response = d.querySelector(".contact-form-response");
    $loader.classList.remove("none");
    setTimeout(() => {
      $loader.classList.add("none");
      $response.classList.remove("none");
      $form.reset();
      setTimeout(() => $response.classList.add("none"), 3000);
    }, 3000);
  });
}
