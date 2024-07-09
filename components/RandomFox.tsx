type Props = { image: string };

export const RandomFox = ({image}: Props): React.JSX.Element => {             

    return <img src={image} width={640} height="auto" className="rounded"/>
}