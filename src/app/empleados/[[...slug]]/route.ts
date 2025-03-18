const URL_BASE = 'https://segula.onrender.com';

export async function GET (
    request: Request,
    {params}: {params: Promise<{slug: string}>}):
    Promise<Response>  {

    const { slug } = await params;
    console.log("SLUG", slug)

    const URL = `${URL_BASE}/empleado`;
    let url = URL;

    if (slug) {
        url = `${URL}/${slug[0]}`
    }

    const dataEmpleado = await fetch(url);
    const empleados = await dataEmpleado.json();

    return Response.json(empleados);
}

export async function POST (request: Request,) {
    const body = await request.json();
    const url = `${URL_BASE}/empleado`;

    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json",
        }
    });

    if (! res.ok) {
        console.log("POST ERROR STATUS", res.status)
        return Response.json({
            id: -1,
            nombre: ''
        });
    }

    const response = await res.json();
    
    return Response.json(response);
}

export async function DELETE (
    request: Request,
    {params}: {params: Promise<{slug: string}>}):
    Promise<Response>  {

    const { slug } = await params;
    console.log("SLUG", slug)
    const url = `${URL_BASE}/empleado/${slug[0]}`
    
    const dataEmpleado = await fetch(url, {
        method: 'DELETE',
    });

    const empleados = await dataEmpleado.json();

    return Response.json(empleados);
}