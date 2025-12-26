import { clients } from "@/lib/data";

const ClientsSection = () => {
  const extendedClients = [...clients, ...clients]; // Duplicate for seamless scroll

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto text-center">
        <h3 className="text-lg font-semibold text-foreground/60 mb-8">
          TRUSTED BY COMPANIES WORLDWIDE
        </h3>
        <div className="relative overflow-hidden">
          <div className="flex w-max scroll-animation">
            {extendedClients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-52 h-20 mx-8"
              >
                <svg
                  className="w-full h-12 text-foreground/60"
                  role="img"
                  aria-label={client.name}
                  dangerouslySetInnerHTML={{
                    __html: `<title>${client.name}</title><use xlink:href="${client.logo}" />`,
                  }}
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
