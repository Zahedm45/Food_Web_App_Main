package service.payment;


import com.stripe.Stripe;
import com.stripe.exception.*;
import com.stripe.model.Charge;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;


import java.util.HashMap;
import java.util.Map;



@Path("stripe")
@Produces(MediaType.APPLICATION_JSON)
public class CheckoutResource {
    public CheckoutResource() {}

    @POST
    @Path(("webhook"))
    public String submitPayment(String tokenId) {
        // TODO: create an env file to save stripe key
        Stripe.apiKey = System.getenv("MY_KEY");
        Map<String, Object> params = new HashMap<>();
        params.put("amount", 500);
        params.put("currency", "dkk");
        params.put("description", "Example charge");
        params.put("source", tokenId);

        try {
            Charge.create(params);
            System.out.println("Payment success.");
            return "Payment success";

        } catch (AuthenticationException e) {
            System.out.println("Error 1");
            e.printStackTrace();
        } catch (InvalidRequestException e) {
            System.out.println("Error 2");
            e.printStackTrace();
        } catch (CardException e) {
            System.out.println("Error 3");
            e.printStackTrace();
        } catch (StripeException e) {
            System.out.println("Error 4");
            e.printStackTrace();
        }

        return "Payment failed";
    }

}