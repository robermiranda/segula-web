const URL_BASE = 'https://segula.onrender.com/horas-trabajo';

export async function GET (
    request: Request,
    {params}: {params: Promise<{slug: string}>}):
    Promise<Response>  {

    const { slug } = await params;
    console.log("SLUG", slug)

    let url = URL_BASE;

    if (slug) {
        switch (slug[0]) {
            case 'empleado':
                // Obtiene los registros de horas trabajadas para el empleado con id = slug[1]
                url = `${URL_BASE}/${slug[0]}/${slug[1]}`;
                break;
            case 'payroll':
                // Calcula el payroll para el empleado con: id = slug[1],
                // fecha1 = slug[2], fecha 2 = slug[3] y tarifa = slug[4]
                url = `${URL_BASE}/${slug[0]}/${slug[1]}/${slug[2]}/${slug[3]}/${slug[4]}`;
                break;
            default:
                // Obtiene un registro de horas trabajadas para id = slug[0]
                url = `${URL_BASE}/${slug[0]}`;
                break;
        }
    }

    const response = await fetch(url);
    const data = await response.json();

    return Response.json(data);
}

export async function POST (request: Request,) {
    const body = await request.json();
    const url = `${URL_BASE}`;

    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json",
        }
    });

    if (! response.ok) {
        console.log("POST ERROR STATUS", response.status)
        return Response.json({
            id: -1,
        });
    }

    const dataObj = await response.json();
    
    return Response.json(dataObj);
}
