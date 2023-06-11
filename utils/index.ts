export const handleScrollToSection = (sectionRef: any, setOpen: any) => {
  sectionRef?.current?.scrollIntoView({ behavior: "smooth" });
  setOpen(false);
};
