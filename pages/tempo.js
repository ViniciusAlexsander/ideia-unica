function Tempo(props) {
  const dynamicDate = new Date();
  const dynamicDateString = dynamicDate.toGMTString();


  return (
    <div>
      <div> {dynamicDateString} (dinâmico)</div>
      <div> {props.staticDateString} (estático)</div>
    </div>
  );
}

export async function getStaticProps() {
  const staticDate = new Date();
  const staticDateString = staticDate.toGMTString();

  return {
    props: {
      staticDateString
    },
    //para revalidar os dados a cada 1 segundo
    revalidate: 85000
  }
}

export default Tempo;
