// FAQ topic tabs. Without this script every question group stays visible.
document.querySelectorAll("[data-faq]").forEach((faq) => {
  const tabList = faq.querySelector(".faq-tabs");
  if (!tabList) return;
  const tabs = [...tabList.querySelectorAll("[data-faq-tab]")];
  const panels = [...faq.querySelectorAll("[data-faq-group]")];

  const select = (name) => {
    tabs.forEach((t) => t.setAttribute("aria-selected", String(t.dataset.faqTab === name)));
    panels.forEach((p) => (p.hidden = p.dataset.faqGroup !== name));
  };

  tabList.hidden = false;
  tabList.addEventListener("click", (event) => {
    const tab = event.target.closest("[data-faq-tab]");
    if (tab) select(tab.dataset.faqTab);
  });
  select(tabs[0].dataset.faqTab);
});
