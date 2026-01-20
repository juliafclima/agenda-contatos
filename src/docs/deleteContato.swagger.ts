/**
 * @swagger
 * /api/contatos/{id}:
 *   delete:
 *     summary: Exclui um contato pelo ID
 *     tags:
 *       - Contatos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do contato a ser excluído
 *         schema:
 *           type: integer
 *           example: 18
 *     responses:
 *       204:
 *         description: Contato excluído com sucesso (sem corpo de resposta)
 *       400:
 *         description: ID inválido
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: ID do contato inválido para exclusão!
 *       404:
 *         description: Contato não encontrado
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: Contato não encontrado para exclusão!
 *       500:
 *         description: Erro ao excluir contato
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: Erro ao excluir contato!
 */
