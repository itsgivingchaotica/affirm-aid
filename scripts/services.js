$(document).ready(function() {
 //all the services funded  
  const services = [
    {
      image: "../images/electrolysis.jpg",
      text: "Laser Hair Removal & Electrolysis"
    },
    {
      image: "../images/dermal-fillers.jpg",
      text: "Non-surgical Facial & Body Augmentation and Feminization"
    },
    {
      image: "../images/hairtransplantwoman.jpg",
      text: "Hair Restoration"
    },
    {
      image: "../images/voicetherapy.jpeg",
      text: "Voice Therapy"
    },
    {
      image: "../images/supplies.jpg",
      text: "Surgery Aftercare Supplies"
    },
    {
      image: "../images/postop-transport.jpg",
      text: "Reliable Hospital/Post-Op Appointment Transportation"
    },
    {
      image: "../images/hotel.jpg",
      text: "Surgeon-Approved Hotel Accommodations"
    },
    {
      image: "../images/lymphatic-massage.jpg",
      text: "Post-BBL Lymphatic Massages"
    },
    {
      image: "../images/hyperbaric.jpg",
      text: "Hyperbaric Oxygen Therapy"
    },
    {
      image: "../images/supplies-tools.jpg",
      text: "Gender-Affirming Beauty Supplies, Tools and Accessories Marketplace"
    }
  ];

  const servicesContainer = $("#services");

  // Loop and create service containers dynamically
  services.forEach(function(service, index) {
    const serviceContainer = $("<div>", { class: "service-container" });

    const serviceImg = $("<div>", { class: "service-img" });
    const img = $("<img>", { src: service.image, alt: "service" });
    serviceImg.append(img);

    const serviceText = $("<div>", { class: "service-text" });
    serviceText.append($("<strong>").text(service.text));

    if (index % 2 === 0){
    serviceContainer.addClass("hover-even");
    serviceContainer.append(serviceImg, serviceText);
    } else {
        serviceContainer.addClass("hover-odd");
        serviceContainer.append(serviceText,serviceImg);
    }
    servicesContainer.append(serviceContainer);
  });
});