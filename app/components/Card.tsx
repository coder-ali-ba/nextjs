type cardProps ={
    cardName: string,
    cardDescription: string
}


export  const Card = ({cardName , cardDescription}: cardProps)=>{
   return (
    <div>
        <h1>{cardName}</h1>
        <h3>{cardDescription}</h3>
    </div>
   )
}