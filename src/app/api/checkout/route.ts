import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(request: NextRequest) {
    try {
        const { planType, email } = await request.json();

        console.log("🔑 Email:", email);
        
        if (!planType || !email) {
            return NextResponse.json({ error: "Parâmetros inválidos" }, { status: 400 });
        }

        // Define os preços dos planos
        const planPrices = {
            basic: "price_1R1wBOE3eHahybdvpzJ85yUN", // ID do plano mensal na Stripe
            premium: "price_1R1wBbE3eHahybdvbPcoocZa", // ID do plano anual na Stripe
        };

        // Criar a sessão de checkout
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "subscription",
                line_items: [
                {
                    // @ts-ignore
                    price: planPrices[planType],
                    quantity: 1,
                },
            ],
            customer_email: email,
            success_url: `${process.env.NEXT_PUBLIC_APP_URL}`,
            cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}`,
            metadata: {
                // @ts-ignore
                chosenPlan: planPrices[planType]
            }
        });

        return NextResponse.json({ url: session.url });
    } catch (err: any) {
        console.error("❌ Erro ao criar sessão de checkout:", err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}