"use client";

import * as React from "react";
import { Store, MapPin, Phone, Clock, ExternalLink } from "lucide-react";

import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { ScrollArea } from "../components/ui/scroll-area";

// Sample store data
const stores = [
  {
    id: 1,
    name: "Grocery Store",
    address: "123 Main St",
    phone: "(555) 123-4567",
    hours: "9AM - 9PM",
    website: "https://grocery.com",
  },
  {
    id: 2,
    name: "Bakery",
    address: "456 Elm St",
    phone: "(555) 987-6543",
    hours: "7AM - 7PM",
    website: "https://bakery.com",
  },
  {
    id: 3,
    name: "Pharmacy",
    address: "789 Oak St",
    phone: "(555) 246-8135",
    hours: "24/7",
    website: "https://pharmacy.com",
  },
  {
    id: 4,
    name: "Bookstore",
    address: "321 Pine St",
    phone: "(555) 369-2580",
    hours: "10AM - 8PM",
    website: "https://bookstore.com",
  },
  {
    id: 5,
    name: "Cafe",
    address: "654 Maple St",
    phone: "(555) 147-2589",
    hours: "6AM - 10PM",
    website: "https://cafe.com",
  },
];

export default function SpaciousStoreNavbarWithMap() {
  const [selectedStore, setSelectedStore] = React.useState(null);

  return (
    <div className="flex h-[800px] border rounded-lg overflow-hidden">
      <nav className="w-80 bg-background border-r">
        <ScrollArea className="h-full">
          {stores.map((store) => (
            <Button
              key={store.id}
              variant="ghost"
              className={cn(
                "w-full justify-start px-6 py-8 text-left",
                selectedStore?.id === store.id && "bg-accent"
              )}
              onClick={() => setSelectedStore(store)}
            >
              <Store className="mr-3 h-5 w-5" />
              <span className="font-semibold text-lg">{store.name}</span>
            </Button>
          ))}
        </ScrollArea>
      </nav>
      <main className="flex-1 flex flex-col">
        <div className="flex-1 bg-muted p-6">
          {/* Google Maps placeholder */}
          <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-lg">
            <span className="text-gray-500 text-xl">
              Google Maps would be displayed here
            </span>
          </div>
        </div>
        <div className="h-80 p-6 bg-background overflow-auto">
          {selectedStore ? (
            <Card className="w-full max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl">{selectedStore.name}</CardTitle>
                <CardDescription className="text-lg">
                  Store Information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-lg">
                  <MapPin className="mr-3 h-5 w-5" />
                  <span>{selectedStore.address}</span>
                </div>
                <div className="flex items-center text-lg">
                  <Phone className="mr-3 h-5 w-5" />
                  <span>{selectedStore.phone}</span>
                </div>
                <div className="flex items-center text-lg">
                  <Clock className="mr-3 h-5 w-5" />
                  <span>{selectedStore.hours}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" size="lg">
                  <a
                    href={selectedStore.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg"
                  >
                    Visit Website
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <div className="flex h-full items-center justify-center text-muted-foreground text-xl">
              Select a store to view details
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
