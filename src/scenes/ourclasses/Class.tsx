type Props = {
  name: string;
  description?: string;
  image: string;
};

const Class = ({ name, description, image }: Props) => {
  const overlayStyles = `p-5 absolute z-3 flex h-[235px]
    xs:h-[380px] w-[310px] xs:w-[450px] flex-col 
    items-center justify-center whitespace-normal 
    bg-primary-500 text-center text-white opacity-0 
    transition duration-500 bg-opacity-40 opacity-100 md:opacity-0 md:hover:opacity-90 md:bg-opacity-90`;

  //TODO: Make overlay styles more suitable for small screens and not on hover

  return (
    <li className="relative mx-5 inline-block w-[310px] xs:h-[380px] xs:w-[450px] ">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img alt={`${image}`} src={image} />
    </li>
  );
};

export default Class;
