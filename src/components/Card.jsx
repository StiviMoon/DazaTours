import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";



export default function BookingCard({ imageSrc, title, rating, description,precio,a,b,c,d}) {
  // Función para abrir un enlace de WhatsApp con un texto predefinido
  const openWhatsApp = () => {
    const message = encodeURIComponent("¡Hola! Me gustaría hacer una reserva.");
    const whatsappURL = `https://wa.me/573045449727?text=${message}`;
    window.open(whatsappURL, "_blank");
  };


  return (
    <Card className="w-full max-w-[26rem] shadow-lg m-5 mt-10 transition-transform transform-gpu hover:scale-105 ">
      <CardHeader floated={false} color="blue-gray">
        <img src={imageSrc} alt={title} className="h-[350px] w-full object-cover "/>
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
       
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-bold">
            {title}
          </Typography>
          <Typography
            color="blue-gray"
            className="flex items-center gap-1.5 font-normal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="-mt-0.5 h-5 w-5 text-yellow-700"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            {rating}
          </Typography>
        </div>
        <Typography color="gray" className="pb-4">{description}</Typography>

        <div className="flex flex-col font-bold text-scuba_blue">
          <li >{a}</li>
          <li >{b}</li>
          <li >{c}</li>
          <li >{d}</li>
        </div>
        
        <Typography  className="pt-4 text-xl text-end text-verde_o">{precio}</Typography>
      </CardBody>
      <CardFooter className="pt-3">
        <Button size="lg" fullWidth={true} className="m-1 text-1xl " onClick={openWhatsApp}>
          Reserve
        </Button>

      </CardFooter>
    </Card>
  );
}
