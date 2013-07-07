CINEMA
[
    
   '{{repeat(30)}}',
   {   
       "type": "Feature",
       "id": "{{index}}",
       "properties": {
          
          "cinema": "true",
          "category": "cinema",
          "picture": "http://placehold.it/32x32",
          "name": "{{lastName}} Cinema",
          "phone": "{{phone}}",
          "email": "{{email}}",
          "address": "{{numeric(10000,40000)}}, {{street}}, {{city}}, Hong Kong",
          "blip": "{{lorem(1,sentences)}}",
          "about": "{{lorem(1,paragraphs)}}",
          "tags": [
            "cinema",
            "movie",
            "{{lorem(1)}}",
            "{{lorem(1)}}"
          ]
        },
         "geometry": {
                    "type": "Point",
                    "coordinates": [
                        "{{numeric(114.000001, 114.999999)}}",
                        "{{numeric(22.000001, 23.999999)}}",
                        0
                    ]
                }
    }]



NEW
[
    
   '{{repeat(10)}}',
   {   
       "type": "Feature",
       "id": "{{index}}",
       "properties": {
          
          "new": "true",
          "category": "new",
          "picture": "http://placehold.it/32x32",
          "name": "{{lastName}} NEW!",
          "phone": "{{phone}}",
          "email": "{{email}}",
          "address": "{{numeric(10000,40000)}}, {{street}}, {{city}}, Hong Kong",
          "blip": "{{lorem(1,sentences)}}",
          "about": "{{lorem(1,paragraphs)}}",
          "tags": [
            "new",
            "hot",
            "{{lorem(1)}}",
            "{{lorem(1)}}"
          ]
        },
         "geometry": {
                    "type": "Point",
                    "coordinates": [
                        "{{numeric(113.77922, 114.42467)}}",
                        "{{numeric(22.13462, 22.54617)}}",
                        0
                    ]
                }
    }]



BARS
[[
    
   '{{repeat(100)}}',
   {   
       "type": "Feature",
       "id": "{{index}}",
       "properties": {
          
          "bars": "true",
          "category": "bars",
          "picture": "http://placehold.it/32x32",
          "name": "{{lastName}} Bar",
          "phone": "{{phone}}",
          "email": "{{email}}",
          "address": "{{numeric(10000,40000)}}, {{street}}, {{city}}, Hong Kong",
          "blip": "{{lorem(1,sentences)}}",
          "about": "{{lorem(1,paragraphs)}}",
          "tags": [
            "bar",
            "pup",
            "{{lorem(1)}}",
            "{{lorem(1)}}"
          ]
        },
         "geometry": {
                    "type": "Point",
                    "coordinates": [
                        "{{numeric(113.77922, 114.42467)}}",
                        "{{numeric(22.13462, 22.54617)}}",
                        0
                    ]
                }
    }]



category[\w\W]*?address