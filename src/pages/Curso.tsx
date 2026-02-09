import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Play,
  CheckCircle2,
  Clock,
  ChevronDown,
  ChevronRight,
  Lock,
  BookOpen,
  Trophy,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  courseModules,
  calculateProgress,
  getTotalLessons,
  getTotalDuration,
  isLessonLocked,
  getNextAvailableLesson,
  type CourseModule as CourseModuleType,
  type Lesson,
} from "@/data/courseModules";
import { models } from "@/data/models";
import { cn } from "@/lib/utils";

const Curso = () => {
  const { id } = useParams<{ id: string }>();
  const model = models.find((m) => m.id === id);
  
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [expandedModules, setExpandedModules] = useState<string[]>(["chamado"]);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [currentModule, setCurrentModule] = useState<CourseModuleType | null>(null);

  // Load completed lessons from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(`course-progress-${id}`);
    if (saved) {
      setCompletedLessons(JSON.parse(saved));
    }
  }, [id]);

  // Save progress to localStorage
  useEffect(() => {
    if (completedLessons.length > 0) {
      localStorage.setItem(`course-progress-${id}`, JSON.stringify(completedLessons));
    }
  }, [completedLessons, id]);

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
    if (isLessonLocked(lessonId, completedLessons)) return;
    
    setCompletedLessons((prev) =>
      prev.includes(lessonId)
        ? prev.filter((id) => id !== lessonId)
        : [...prev, lessonId]
    );
  };

  const openLesson = (lesson: Lesson, module: CourseModuleType) => {
    if (isLessonLocked(lesson.id, completedLessons)) return;
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

  const getNextLesson = (): Lesson | null => {
    if (!selectedLesson || !currentModule) return null;
    
    const allLessons = courseModules.flatMap(m => m.lessons);
    const currentIndex = allLessons.findIndex(l => l.id === selectedLesson.id);
    
    if (currentIndex < allLessons.length - 1) {
      const next = allLessons[currentIndex + 1];
      if (!isLessonLocked(next.id, completedLessons)) {
        return next;
      }
    }
    return null;
  };

  const getPrevLesson = (): Lesson | null => {
    if (!selectedLesson || !currentModule) return null;
    
    const allLessons = courseModules.flatMap(m => m.lessons);
    const currentIndex = allLessons.findIndex(l => l.id === selectedLesson.id);
    
    if (currentIndex > 0) {
      return allLessons[currentIndex - 1];
    }
    return null;
  };

  if (!model) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Modelo não encontrado</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link 
            to={`/meu-modelo/${id}`}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para {model.name}
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Video Player / Content Area */}
          <div className="lg:col-span-2">
            {selectedLesson ? (
              <div className="space-y-6">
                {/* Video Player */}
                <div className="aspect-video rounded-xl overflow-hidden border border-border bg-black">
                  {selectedLesson.youtubeId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${selectedLesson.youtubeId}?autoplay=0&rel=0`}
                      title={selectedLesson.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-muted">
                      <div className="text-center">
                        <Play className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground">Vídeo em breve</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Lesson Info */}
                <div className="rounded-xl border border-border bg-card p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span>{currentModule?.icon}</span>
                    <span>{currentModule?.title}</span>
                  </div>
                  <h1 className="font-display text-2xl font-bold text-foreground mb-4">
                    {selectedLesson.title}
                  </h1>
                  <p className="text-muted-foreground mb-6">
                    {selectedLesson.description}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <Badge variant="outline">
                        <Clock className="h-3 w-3 mr-1" />
                        {selectedLesson.duration}
                      </Badge>
                      {completedLessons.includes(selectedLesson.id) && (
                        <Badge className="bg-accent/20 text-accent border-0">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          Concluída
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      {getPrevLesson() && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            const prev = getPrevLesson();
                            if (prev) {
                              const mod = courseModules.find(m => m.lessons.some(l => l.id === prev.id));
                              if (mod) openLesson(prev, mod);
                            }
                          }}
                        >
                          <ArrowLeft className="h-4 w-4 mr-1" />
                          Anterior
                        </Button>
                      )}
                      
                      <Button
                        onClick={() => toggleLessonComplete(selectedLesson.id)}
                        className={cn(
                          completedLessons.includes(selectedLesson.id)
                            ? "bg-muted text-muted-foreground"
                            : "bg-accent text-accent-foreground"
                        )}
                      >
                        <CheckCircle2 className="h-4 w-4 mr-2" />
                        {completedLessons.includes(selectedLesson.id)
                          ? "Desmarcar"
                          : "Marcar como concluída"}
                      </Button>

                      {getNextLesson() && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            const next = getNextLesson();
                            if (next) {
                              const mod = courseModules.find(m => m.lessons.some(l => l.id === next.id));
                              if (mod) openLesson(next, mod);
                            }
                          }}
                        >
                          Próxima
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="aspect-video rounded-xl border border-border bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <div className="text-center">
                  <BookOpen className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h2 className="font-display text-xl font-bold text-foreground mb-2">
                    Curso: {model.name}
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Selecione uma aula para começar
                  </p>
                  <Button
                    onClick={() => {
                      const nextId = getNextAvailableLesson(completedLessons);
                      if (nextId) {
                        const lesson = courseModules.flatMap(m => m.lessons).find(l => l.id === nextId);
                        const module = courseModules.find(m => m.lessons.some(l => l.id === nextId));
                        if (lesson && module) openLesson(lesson, module);
                      }
                    }}
                    className="bg-accent text-accent-foreground"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Continuar de onde parou
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar - Course Progress */}
          <div className="lg:col-span-1 space-y-6">
            {/* Progress Card */}
            <div className="rounded-xl border border-primary/30 bg-gradient-to-r from-primary/10 to-transparent p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Progresso</p>
                    <p className="font-display font-bold text-primary">{progress}%</p>
                  </div>
                </div>
                {progress === 100 && (
                  <Trophy className="h-8 w-8 text-accent animate-pulse" />
                )}
              </div>

              <Progress value={progress} className="h-2 mb-3" />

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>{completedLessons.length}/{totalLessons} aulas</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {totalDuration}
                </span>
              </div>
            </div>

            {/* Modules List */}
            <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-2">
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
                        <button className="w-full p-3 flex items-center gap-3 text-left hover:bg-white/5 transition-colors rounded-t-xl">
                          <div
                            className={cn(
                              "h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0",
                              isCompleted
                                ? "bg-accent text-accent-foreground"
                                : "bg-muted text-muted-foreground"
                            )}
                          >
                            {isCompleted ? (
                              <CheckCircle2 className="h-4 w-4" />
                            ) : (
                              <span>{index + 1}</span>
                            )}
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-sm">{module.icon}</span>
                              <h4 className="font-semibold text-sm text-foreground truncate">
                                {module.title}
                              </h4>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              {module.lessons.length} aulas
                            </p>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            <span className="text-xs text-muted-foreground">
                              {moduleProgress}%
                            </span>
                            {isExpanded ? (
                              <ChevronDown className="h-4 w-4 text-muted-foreground" />
                            ) : (
                              <ChevronRight className="h-4 w-4 text-muted-foreground" />
                            )}
                          </div>
                        </button>
                      </CollapsibleTrigger>

                      <CollapsibleContent>
                        <div className="px-3 pb-3 space-y-1">
                          {module.lessons.map((lesson) => {
                            const isLessonCompleted = completedLessons.includes(lesson.id);
                            const isLocked = isLessonLocked(lesson.id, completedLessons);
                            const isSelected = selectedLesson?.id === lesson.id;

                            return (
                              <div
                                key={lesson.id}
                                className={cn(
                                  "flex items-center gap-2 p-2 rounded-lg transition-all",
                                  isLocked
                                    ? "opacity-50 cursor-not-allowed"
                                    : "cursor-pointer hover:bg-white/10",
                                  isSelected && "bg-accent/20 border border-accent/30",
                                  isLessonCompleted && !isSelected && "bg-accent/10"
                                )}
                                onClick={() => !isLocked && openLesson(lesson, module)}
                              >
                                <div
                                  className={cn(
                                    "h-6 w-6 rounded-full flex items-center justify-center shrink-0",
                                    isLocked
                                      ? "bg-muted"
                                      : isLessonCompleted
                                      ? "bg-accent text-accent-foreground"
                                      : "bg-primary/20"
                                  )}
                                >
                                  {isLocked ? (
                                    <Lock className="h-3 w-3 text-muted-foreground" />
                                  ) : isLessonCompleted ? (
                                    <CheckCircle2 className="h-3 w-3" />
                                  ) : (
                                    <Play className="h-3 w-3 text-primary ml-0.5" />
                                  )}
                                </div>

                                <div className="flex-1 min-w-0">
                                  <p
                                    className={cn(
                                      "text-xs font-medium truncate",
                                      isLessonCompleted ? "text-accent" : "text-foreground"
                                    )}
                                  >
                                    {lesson.title}
                                  </p>
                                </div>

                                <span className="text-[10px] text-muted-foreground shrink-0">
                                  {lesson.duration}
                                </span>
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
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Curso;
