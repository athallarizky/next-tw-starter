'use client'

type TButtonProps = {
    label: string;
    onClick?: () => void;
}
export default function Button({...props} : TButtonProps) {
  return (
    <button onClick={props.onClick}>{props.label}</button>
  )
}