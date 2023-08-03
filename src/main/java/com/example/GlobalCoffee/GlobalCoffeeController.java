package com.example.GlobalCoffee;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
// import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.OutputKeys;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;
import java.io.File;
import org.springframework.web.servlet.view.RedirectView;

@RestController
public class GlobalCoffeeController {

  private static final String XML_FILE_PATH = "src/main/resources/Users.xml";
//   @Autowired 
//   private FlightRepository flightRepository;




// this method allows for user authentication through the XML file

  @PostMapping("/login")
    public RedirectView credentials(@RequestParam String alias, @RequestParam String password) {
        try {
            DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
            DocumentBuilder builder = factory.newDocumentBuilder();

            Document document = builder.parse(XML_FILE_PATH);

            Element rootElement = document.getDocumentElement();

            NodeList userList = rootElement.getElementsByTagName("user");

            for (int i = 0; i < userList.getLength(); i++) {
                Node userNode = userList.item(i);
                if (userNode.getNodeType() == Node.ELEMENT_NODE) {
                    Element userElement = (Element) userNode;

                    Node usernameNode = userElement.getElementsByTagName("alias").item(0);
                    Node passwordNode = userElement.getElementsByTagName("password").item(0);

                    if (usernameNode != null && passwordNode != null) {
                        String username = usernameNode.getTextContent();
                        String password2 = passwordNode.getTextContent();

                            if (alias.equals(username) && password.equals(password2)) {
                             return new RedirectView("/loginsuccess.html");
                        }
                    }
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new RedirectView("/loginfailure.html");
    }



// this method allows for user creation through the XML file

    @PostMapping("/create")
    public RedirectView create(@RequestParam String alias, @RequestParam String password) {
        try {
            DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();

            DocumentBuilder builder = factory.newDocumentBuilder();
        
            Document document = builder.parse(XML_FILE_PATH);
        
            Element rootElement = document.getDocumentElement();
            


            Element newUser = document.createElement("user");

            Element userElement = document.createElement("alias");
            userElement.setTextContent(alias);
            newUser.appendChild(userElement);

            Element passwordElement = document.createElement("password");
            passwordElement.setTextContent(password);
            newUser.appendChild(passwordElement);

            rootElement.appendChild(newUser);

        TransformerFactory transformerFactory = TransformerFactory.newInstance();
        Transformer transformer = transformerFactory.newTransformer();
            transformer.setOutputProperty(OutputKeys.INDENT, "yes");

        DOMSource source = new DOMSource(document);
        StreamResult result = new StreamResult(new File(XML_FILE_PATH));
            transformer.transform(source, result);

        } catch (Exception e) {
            e.printStackTrace();
        }
        return new RedirectView("/signupsuccess.html");
}
}