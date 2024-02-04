const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="text-center text-[20px] py-5">{`Copyright © ${year} UIE | Ultimate Image Editor.`}</div>
  );
};

export default Footer;
