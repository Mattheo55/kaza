import Card from "@/components/Card";
import Divider from "@/components/Divider";
import ModulCard from "@/components/ModulCard";
import TaskModulCard from "@/components/TaskModulCard";
import Text from "@/components/Text";
import ValueTile from "@/components/ValueTile";
import { db } from "@/db/db";
import { tasks } from "@/db/schema";
import { Modules } from "@/type/Module";
import { frenchFormat } from "@/utils/formatDate";
import { Langs } from "@/utils/langs";
import { eq } from "drizzle-orm";
import { useLiveQuery } from "drizzle-orm/expo-sqlite";
import { FlatList, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { data: task } = useLiveQuery(db.select().from(tasks).where(eq(tasks.isComplete, false)));
  const today = new Date();

  const MENU_MODULS: Modules[] = [
    {
      title: "Course",
      description: "0 articles",
      icon: "list",
      color: "#C99A3E",
      href: "/task"
    },
    {
      title: "Calendrier",
      description: "Mar 18:00 -- Rendez vous",
      icon: "calendar",
      color: "#5B8A82",
      href: "/",
    },
    {
      title: "Entretien",
      description: "Détecteur de fumé -- Vérifier pile",
      icon: "gears",
      color: "#B0655A",
      href: "/",
    },
    {
      title: "Recettes",
      description: "Gratin de feur",
      icon: "apple",
      color: "#9A8A5B",
      href: "/",
    },
    {
      title: "Inventaire",
      description: "3 articles bas",
      icon: "archive",
      color: "#5B6E8A",
      href: "/",
    },
    {
      title: "Documents",
      description: "4 documents",
      icon: "paper",
      color: "#7A6E8A",
      href: "/",
    },
    {
      title: "Routines",
      description: "0/4 faites aujourd'hui",
      icon: "sunrise",
      color: "#8A9A5B",
      href: "/",
    },
  ];

  return (
    <SafeAreaView className="p-5 bg-[#F8F7F4] flex-1">
      <ScrollView contentContainerClassName="gap-5">
        <View>
          <Text className="text-slate-300">
            {today.toLocaleDateString(Langs.fr, frenchFormat)}
          </Text>
          <Text className="text-5xl" bold>Bonjour !</Text>
        </View>

        <View>
          <Card elevation>
            <Text className="text-sm text-green-500 mb-2" bold>
              AUJOURD'HUI
            </Text>
            <Text className="text-2xl" bold>
              {task.length.toString()} tâches restantes
            </Text>
            <Divider />
            <View className="flex-row gap-5">
              <ValueTile title="Budget restant">0 €</ValueTile>
              <ValueTile title="Courses">0 articles</ValueTile>
            </View>
          </Card>
        </View>

        <Text className="text-[#2E2A258C]/25">MODULES</Text>

        <TaskModulCard />

        <FlatList
          data={MENU_MODULS}
          renderItem={({ item }) => (
            <ModulCard
              icon={item.icon}
              color={item.color}
              title={item.title}
              description={item.description}
              link={item.href}
            />
          )}
          keyExtractor={(item) => item.title}
          numColumns={2}
          columnWrapperClassName="gap-2 items-stretch"
          contentContainerClassName="gap-2"
          scrollEnabled={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
