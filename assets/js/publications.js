// Topic filter for /publications/. Without JavaScript every publication stays visible.
(() => {
  const buttons = document.querySelectorAll(".filters button");
  const groups = document.querySelectorAll(".year-group");

  const apply = (topic) => {
    buttons.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.filter === topic)));
    groups.forEach((group) => {
      let visible = 0;
      group.querySelectorAll(".pub").forEach((pub) => {
        const show = topic === "all" || pub.dataset.topic === topic;
        pub.hidden = !show;
        if (show) visible += 1;
      });
      group.hidden = visible === 0;
    });
  };

  buttons.forEach((b) => b.addEventListener("click", () => apply(b.dataset.filter)));
})();
