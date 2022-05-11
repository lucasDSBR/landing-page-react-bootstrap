import CardPlanPrice from '../../components/CardPlanPrice/CardPlanPrice';
import IconDot from '../../assets/dot.svg';


const dataCards = [
  {
    type: 1,
    typeText: "Grátis",
    price: 0,
    description: "Gerenciamento de usuários e estoque"
  },
  {
    type: 2,
    typeText: "Prata",
    price: 130,
    description: "Gerencie usuários, estoque e produtos. Além disso, tranha uma visualização gráfica de tudo que foi realizado em um determinado período de tempo."
  },
  {
    type: 3,
    typeText: "Premium",
    price: 200,
    description: "Gerencie usuários, estoque e produtos. Além disso, tranha uma visualização gráfica de tudo que foi realizado em um determinado período de tempo."
  }
]



function Home() {
  return (
    
    <div class="container">
      <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
          as
      </div>
      <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
      <h1 class="display-4 fw-normal">Preços</h1>
      <p class="fs-5 text-muted">Cançado de utilizar papeis e várias planilhas para gerenciar pessoas, produtos, estoque e muitas outras coisas na sua empresa que acabam lhe deixando com muitas dores de cabeça ? Contrate agora mesmo um de nossos planos e acabe com tudo isso num estralar de dedos !</p>
    </div>
      <div class="row row-cols-1 row-cols-md-3 mb-3 text-center d-flex align-items-end">
        {dataCards && dataCards.map((item) => {
          return (
            <CardPlanPrice data={item}/>   
          )
        })}
      </div>
    </div>
  );
}

export default Home;
