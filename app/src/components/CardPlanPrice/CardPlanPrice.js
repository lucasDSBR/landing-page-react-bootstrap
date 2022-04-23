function CardPlanPrice({data}){
    console.log(data)
    return (
    <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm bg-light">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">{data.typeText}</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">${data.price}<small class="text-muted fw-light">/mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>{data.description}</li>
            </ul>
            <button type="button" className={data.type == 1? 'w-100 btn btn-lg btn-outline-primary': 'w-100 btn btn-lg btn-outline-success'}>Assinar</button>
          </div>
        </div>
    </div>
    )
}
export default CardPlanPrice;