"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod"; // Importamos o z para usar os utilitários de tipo
import { projectSchema, ProjectFormData } from "../../lib/schemas";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

// Definimos o tipo de entrada (Input) que o formulário aceita
type ProjectFormInput = z.input<typeof projectSchema>;

export default function NovoProjetoPage() {
  // 1. Tipamos o useForm com a Entrada (Input)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProjectFormInput>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: "",
      email: "",
      budget: 0,
      // category: undefined (deixamos vazio para forçar a escolha)
    },
  });

  // 2. O SubmitHandler deve esperar o tipo de ENTRADA do formulário,
  // mas dentro da função tratamos os dados como o tipo de SAÍDA (ProjectFormData)
  const onSubmit: SubmitHandler<ProjectFormInput> = async (values) => {
    try {
      // O zodResolver já garantiu que os dados estão no formato de saída correto
      const data = values as ProjectFormData;
      console.log("Enviando dados formatados:", data);
      // Simulação de API
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert(`Sucesso! O orçamento de R$ ${data.budget} foi registrado.`);
    } catch (error) {
      console.error(error);
      alert("Erro ao salvar o projeto.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 flex justify-center items-start pt-20">
      <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 max-w-lg w-full">
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-slate-800">🚀 Novo Projeto</h1>
          <p className="text-slate-500">
            Preencha os dados técnicos para submissão.
          </p>
        </header>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Título */}
          <Input
            label="Título do Projeto"
            placeholder="Ex: Sistema de Gestão"
            error={errors.title?.message}
            {...register("title")}
          />

          {/* Categoria */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-slate-700">
              Categoria
            </label>
            <select
              {...register("category")}
              className={`p-2 border rounded-lg outline-none focus:ring-2 transition-all ${
                errors.category
                  ? "border-red-500 focus:ring-red-200"
                  : "border-slate-300 focus:ring-blue-200"
              }`}
            >
              <option value="">Selecione...</option>
              <option value="web">Web App</option>
              <option value="mobile">Mobile</option>
              <option value="desktop">Desktop</option>
            </select>
            {errors.category && (
              <span className="text-xs text-red-500 font-medium">
                {errors.category.message}
              </span>
            )}
          </div>

          {/* Orçamento */}
          <Input
            label="Orçamento Estimado (R$)"
            type="number"
            placeholder="Mínimo 100"
            error={errors.budget?.message}
            {...register("budget")}
          />

          {/* E-mail */}
          <Input
            label="E-mail do Tech Lead"
            placeholder="exemplo@tech.com"
            error={errors.email?.message}
            {...register("email")}
          />

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Cadastrar Projeto"}
          </Button>
        </form>
      </div>
    </div>
  );
}
