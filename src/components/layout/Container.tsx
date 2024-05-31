type TContainerProps = {
  children: React.ReactNode;
};

export default function Container({ ...props }: TContainerProps) {
  return <div className="min-h-[150px]">{props.children}</div>;
}
