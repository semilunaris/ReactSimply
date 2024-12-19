type TitlePropseType = {
    title: string
}


function Example2(props: TitlePropseType){
    return(
   <div>
    <>
   это псевдоэлемент
   </>
   <PageTitle titleNextProp={props.title}/>
   <PageTitle titleNextProp={'Another title'}/>
   </div>
    )
   }
   

   type NextTitlePropType = {
    titleNextProp: string
   }


  function PageTitle(props: NextTitlePropType){
  return  <h1>{props.titleNextProp}</h1>
  }

   export default Example2