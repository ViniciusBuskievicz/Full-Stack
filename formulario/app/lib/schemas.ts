import { z } from 'zod';
export const projectSchema = z.object({
title: z.string()
.min(5, 'O título deve ter pelo menos 5 caracteres')
.trim(),
// Forma 100% segura: Passamos apenas a mensagem direta no segundo parâmetro
// O Zod entende isso como a mensagem para qualquer erro de validação do enum
category: z.enum(['web', 'mobile', 'desktop'], {
message: 'Selecione uma categoria válida',
}),
budget: z.coerce.number()
.min(100, 'O orçamento mínimo é de R$ 100'),
email: z.string()
.email('Digite um e-mail válido para o Tech Lead')
.toLowerCase(),
});
export type ProjectFormData = z.infer<typeof projectSchema>;
export type ProjectFormInput = z.input<typeof projectSchema>;