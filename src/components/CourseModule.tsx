import { useState } from "react";
import {
  Play,
  CheckCircle2,
  Clock,
  ChevronDown,
  ChevronRight,
  Lock,
  BookOpen,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  courseModules,
  calculateProgress,
  getTotalLessons,
  getTotalDuration,
  type CourseModule as CourseModuleType,
  type Lesson,
} from "@/data/courseModules";
import { cn } from "@/lib/utils";

interface CourseSystemProps {
  modelName: string;
}

const CourseSystem = ({ modelName }: CourseSystemProps) => {
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [expandedModules, setExpandedModules] = useState<string[]>(["chamado"]);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [currentModule, setCurrentModule] = useState<CourseModuleType | null>(null);

  const progress = calculateProgress(completedLessons);
  const totalLessons = getTotalLessons();
  const totalDuration = getTotalDuration();

  const toggleModule = (moduleId: string) => {
    setExpandedModules((prev) =>
      prev.includes(moduleId)
        ? prev.filter((id) => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const toggleLessonComplete = (lessonId: string) => {
    setCompletedLessons((prev) =>
      prev.includes(lessonId)
        ? prev.filter((id) => id !== lessonId)
        : [...prev, lessonId]
    );
  };

  const openLesson = (lesson: Lesson, module: CourseModuleType) => {
    setSelectedLesson(lesson);
    setCurrentModule(module);
  };

  const getModuleProgress = (module: CourseModuleType): number => {
    const completedInModule = module.lessons.filter((l) =>
      completedLessons.includes(l.id)
    ).length;
    return Math.round((completedInModule / module.lessons.length) * 100);
  };

  const getPhaseColor = (phase: string): string => {
    const colors: Record<string, string> = {
      chamado: "from-blue-500/20 to-blue-600/5 border-blue-500/30",
      preparacao: "from-purple-500/20 to-purple-600/5 border-purple-500/30",
      travessia: "from-orange-500/20 to-orange-600/5 border-orange-500/30",
      provacao: "from-red-500/20 to-red-600/5 border-red-500/30",
      recompensa: "from-green-500/20 to-green-600/5 border-green-500/30",
      retorno: "from-accent/20 to-accent/5 border-accent/30",
    };
    return colors[phase] || "from-muted to-transparent border-border";
  };

  return (
    <div className="space-y-6">
      {/* Header com progresso geral */}
      <div className="rounded-xl border border-primary/30 bg-gradient-to-r from-primary/10 to-transparent p-6">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-foreground">
                Curso: {modelName}
              </h3>
              <p className="text-sm text-muted-foreground">
                Jornada completa de implementação do seu negócio
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Progresso</p>
              <p className="font-display font-bold text-primary">{progress}%</p>
            </div>
            {progress === 100 && (
              <Trophy className="h-8 w-8 text-accent animate-pulse" />
            )}
          </div>
        </div>

        <Progress value={progress} className="h-2 mb-3" />

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>
            {completedLessons.length} de {totalLessons} aulas concluídas
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {totalDuration} de conteúdo
          </span>
        </div>
      </div>

      {/* Módulos */}
      <div className="space-y-4">
        {courseModules.map((module, index) => {
          const moduleProgress = getModuleProgress(module);
          const isExpanded = expandedModules.includes(module.id);
          const isCompleted = moduleProgress === 100;

          return (
            <Collapsible
              key={module.id}
              open={isExpanded}
              onOpenChange={() => toggleModule(module.id)}
            >
              <div
                className={cn(
                  "rounded-xl border bg-gradient-to-r transition-all",
                  getPhaseColor(module.journeyPhase)
                )}
              >
                <CollapsibleTrigger asChild>
                  <button className="w-full p-4 flex items-center gap-4 text-left hover:bg-white/5 transition-colors rounded-t-xl">
                    {/* Número do módulo */}
                    <div
                      className={cn(
                        "h-10 w-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0",
                        isCompleted
                          ? "bg-accent text-accent-foreground"
                          : "bg-muted text-muted-foreground"
                      )}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="h-5 w-5" />
                      ) : (
                        <span>{index + 1}</span>
                      )}
                    </div>

                    {/* Conteúdo */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xl">{module.icon}</span>
                        <h4 className="font-display font-semibold text-foreground truncate">
                          {module.title}
                        </h4>
                        {isCompleted && (
                          <Badge className="bg-accent/20 text-accent border-0 text-xs">
                            Concluído
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {module.subtitle} • {module.lessons.length} aulas
                      </p>
                    </div>

                    {/* Progresso e chevron */}
                    <div className="flex items-center gap-3 shrink-0">
                      <div className="hidden sm:block w-24">
                        <Progress value={moduleProgress} className="h-1.5" />
                      </div>
                      <span className="text-xs text-muted-foreground w-10 text-right">
                        {moduleProgress}%
                      </span>
                      {isExpanded ? (
                        <ChevronDown className="h-5 w-5 text-muted-foreground" />
                      ) : (
                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>
                  </button>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <div className="px-4 pb-4 space-y-2">
                    <p className="text-sm text-muted-foreground mb-3 pl-14">
                      {module.description}
                    </p>
                    {module.lessons.map((lesson) => {
                      const isLessonCompleted = completedLessons.includes(
                        lesson.id
                      );

                      return (
                        <div
                          key={lesson.id}
                          className={cn(
                            "flex items-center gap-3 p-3 rounded-lg border transition-all cursor-pointer",
                            isLessonCompleted
                              ? "bg-accent/10 border-accent/30"
                              : "bg-card/50 border-border hover:bg-card hover:border-primary/30"
                          )}
                          onClick={() => openLesson(lesson, module)}
                        >
                          {/* Checkbox */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleLessonComplete(lesson.id);
                            }}
                            className={cn(
                              "h-6 w-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors",
                              isLessonCompleted
                                ? "bg-accent border-accent text-accent-foreground"
                                : "border-muted-foreground/50 hover:border-primary"
                            )}
                          >
                            {isLessonCompleted && (
                              <CheckCircle2 className="h-4 w-4" />
                            )}
                          </button>

                          {/* Conteúdo da aula */}
                          <div className="flex-1 min-w-0">
                            <p
                              className={cn(
                                "text-sm font-medium truncate",
                                isLessonCompleted
                                  ? "text-accent"
                                  : "text-foreground"
                              )}
                            >
                              {lesson.title}
                            </p>
                            <p className="text-xs text-muted-foreground truncate">
                              {lesson.description}
                            </p>
                          </div>

                          {/* Duração e play */}
                          <div className="flex items-center gap-2 shrink-0">
                            <Badge variant="outline" className="text-xs">
                              <Clock className="h-3 w-3 mr-1" />
                              {lesson.duration}
                            </Badge>
                            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                              <Play className="h-4 w-4 text-primary ml-0.5" />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>
          );
        })}
      </div>

      {/* Modal de aula */}
      <Dialog open={!!selectedLesson} onOpenChange={() => setSelectedLesson(null)}>
        <DialogContent className="max-w-3xl max-h-[85vh] flex flex-col">
          <DialogHeader className="shrink-0">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <span>{currentModule?.icon}</span>
              <span>{currentModule?.title}</span>
            </div>
            <DialogTitle className="text-xl font-display">
              {selectedLesson?.title}
            </DialogTitle>
          </DialogHeader>

          <div className="flex-1 mt-4 space-y-6">
            {/* Video Player */}
            <div className="aspect-video rounded-xl overflow-hidden border border-border bg-black">
              {selectedLesson?.youtubeId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${selectedLesson.youtubeId}?autoplay=0&rel=0`}
                  title={selectedLesson.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-muted/50">
                  <div className="text-center">
                    <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                      <Play className="h-8 w-8 text-primary ml-1" />
                    </div>
                    <p className="text-muted-foreground">
                      Vídeo em breve disponível
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Duração: {selectedLesson?.duration}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Descrição */}
            <div className="rounded-lg border border-border bg-muted/30 p-4">
              <h4 className="font-semibold text-foreground mb-2">Sobre esta aula</h4>
              <p className="text-sm text-muted-foreground">
                {selectedLesson?.description}
              </p>
            </div>
          </div>

          <div className="flex justify-between gap-3 mt-4 pt-4 border-t border-border shrink-0">
            <Button variant="outline" onClick={() => setSelectedLesson(null)}>
              Fechar
            </Button>
            <Button
              onClick={() => {
                if (selectedLesson) {
                  toggleLessonComplete(selectedLesson.id);
                }
              }}
              className={cn(
                selectedLesson && completedLessons.includes(selectedLesson.id)
                  ? "bg-muted text-muted-foreground"
                  : "bg-accent text-accent-foreground"
              )}
            >
              <CheckCircle2 className="h-4 w-4 mr-2" />
              {selectedLesson && completedLessons.includes(selectedLesson.id)
                ? "Marcar como não concluída"
                : "Marcar como concluída"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CourseSystem;
