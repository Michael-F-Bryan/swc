(function() {var implementors = {};
implementors["swc_common"] = [];
implementors["swc_ecma_ast"] = ["impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.Class.html\" title=\"struct swc_ecma_ast::Class\">Class</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.ClassMethod.html\" title=\"struct swc_ecma_ast::ClassMethod\">ClassMethod</a>","impl&lt;F&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;F&gt; for <a class=\"enum\" href=\"swc_ecma_ast/enum.ClassMethodKind.html\" title=\"enum swc_ecma_ast::ClassMethodKind\">ClassMethodKind</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"enum\" href=\"swc_ecma_ast/enum.Decl.html\" title=\"enum swc_ecma_ast::Decl\">Decl</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.FnDecl.html\" title=\"struct swc_ecma_ast::FnDecl\">FnDecl</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.ClassDecl.html\" title=\"struct swc_ecma_ast::ClassDecl\">ClassDecl</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.VarDecl.html\" title=\"struct swc_ecma_ast::VarDecl\">VarDecl</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"enum\" href=\"swc_ecma_ast/enum.VarDeclKind.html\" title=\"enum swc_ecma_ast::VarDeclKind\">VarDeclKind</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.VarDeclarator.html\" title=\"struct swc_ecma_ast::VarDeclarator\">VarDeclarator</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.Expr.html\" title=\"struct swc_ecma_ast::Expr\">Expr</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"enum\" href=\"swc_ecma_ast/enum.ExprKind.html\" title=\"enum swc_ecma_ast::ExprKind\">ExprKind</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.ArrayLit.html\" title=\"struct swc_ecma_ast::ArrayLit\">ArrayLit</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.ObjectLit.html\" title=\"struct swc_ecma_ast::ObjectLit\">ObjectLit</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.UnaryExpr.html\" title=\"struct swc_ecma_ast::UnaryExpr\">UnaryExpr</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.UpdateExpr.html\" title=\"struct swc_ecma_ast::UpdateExpr\">UpdateExpr</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.BinExpr.html\" title=\"struct swc_ecma_ast::BinExpr\">BinExpr</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.FnExpr.html\" title=\"struct swc_ecma_ast::FnExpr\">FnExpr</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.ClassExpr.html\" title=\"struct swc_ecma_ast::ClassExpr\">ClassExpr</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.AssignExpr.html\" title=\"struct swc_ecma_ast::AssignExpr\">AssignExpr</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.MemberExpr.html\" title=\"struct swc_ecma_ast::MemberExpr\">MemberExpr</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.CondExpr.html\" title=\"struct swc_ecma_ast::CondExpr\">CondExpr</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.CallExpr.html\" title=\"struct swc_ecma_ast::CallExpr\">CallExpr</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.NewExpr.html\" title=\"struct swc_ecma_ast::NewExpr\">NewExpr</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.SeqExpr.html\" title=\"struct swc_ecma_ast::SeqExpr\">SeqExpr</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.ArrowExpr.html\" title=\"struct swc_ecma_ast::ArrowExpr\">ArrowExpr</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.YieldExpr.html\" title=\"struct swc_ecma_ast::YieldExpr\">YieldExpr</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.MetaPropExpr.html\" title=\"struct swc_ecma_ast::MetaPropExpr\">MetaPropExpr</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.AwaitExpr.html\" title=\"struct swc_ecma_ast::AwaitExpr\">AwaitExpr</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.TplLit.html\" title=\"struct swc_ecma_ast::TplLit\">TplLit</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.TplElement.html\" title=\"struct swc_ecma_ast::TplElement\">TplElement</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"enum\" href=\"swc_ecma_ast/enum.ExprOrSuper.html\" title=\"enum swc_ecma_ast::ExprOrSuper\">ExprOrSuper</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"enum\" href=\"swc_ecma_ast/enum.ExprOrSpread.html\" title=\"enum swc_ecma_ast::ExprOrSpread\">ExprOrSpread</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"enum\" href=\"swc_ecma_ast/enum.BlockStmtOrExpr.html\" title=\"enum swc_ecma_ast::BlockStmtOrExpr\">BlockStmtOrExpr</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"enum\" href=\"swc_ecma_ast/enum.PatOrExpr.html\" title=\"enum swc_ecma_ast::PatOrExpr\">PatOrExpr</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.Function.html\" title=\"struct swc_ecma_ast::Function\">Function</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"enum\" href=\"swc_ecma_ast/enum.Lit.html\" title=\"enum swc_ecma_ast::Lit\">Lit</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.Regex.html\" title=\"struct swc_ecma_ast::Regex\">Regex</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.Number.html\" title=\"struct swc_ecma_ast::Number\">Number</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.ModuleDecl.html\" title=\"struct swc_ecma_ast::ModuleDecl\">ModuleDecl</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"enum\" href=\"swc_ecma_ast/enum.ModuleDeclKind.html\" title=\"enum swc_ecma_ast::ModuleDeclKind\">ModuleDeclKind</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"enum\" href=\"swc_ecma_ast/enum.ExportDefaultDecl.html\" title=\"enum swc_ecma_ast::ExportDefaultDecl\">ExportDefaultDecl</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.ImportSpecifier.html\" title=\"struct swc_ecma_ast::ImportSpecifier\">ImportSpecifier</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"enum\" href=\"swc_ecma_ast/enum.ImportSpecifierKind.html\" title=\"enum swc_ecma_ast::ImportSpecifierKind\">ImportSpecifierKind</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.ExportSpecifier.html\" title=\"struct swc_ecma_ast::ExportSpecifier\">ExportSpecifier</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.Module.html\" title=\"struct swc_ecma_ast::Module\">Module</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"enum\" href=\"swc_ecma_ast/enum.ModuleItem.html\" title=\"enum swc_ecma_ast::ModuleItem\">ModuleItem</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"enum\" href=\"swc_ecma_ast/enum.BinaryOp.html\" title=\"enum swc_ecma_ast::BinaryOp\">BinaryOp</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"enum\" href=\"swc_ecma_ast/enum.AssignOp.html\" title=\"enum swc_ecma_ast::AssignOp\">AssignOp</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"enum\" href=\"swc_ecma_ast/enum.UpdateOp.html\" title=\"enum swc_ecma_ast::UpdateOp\">UpdateOp</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"enum\" href=\"swc_ecma_ast/enum.UnaryOp.html\" title=\"enum swc_ecma_ast::UnaryOp\">UnaryOp</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.Pat.html\" title=\"struct swc_ecma_ast::Pat\">Pat</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"enum\" href=\"swc_ecma_ast/enum.PatKind.html\" title=\"enum swc_ecma_ast::PatKind\">PatKind</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"enum\" href=\"swc_ecma_ast/enum.ObjectPatProp.html\" title=\"enum swc_ecma_ast::ObjectPatProp\">ObjectPatProp</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.Prop.html\" title=\"struct swc_ecma_ast::Prop\">Prop</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"enum\" href=\"swc_ecma_ast/enum.PropKind.html\" title=\"enum swc_ecma_ast::PropKind\">PropKind</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"enum\" href=\"swc_ecma_ast/enum.PropName.html\" title=\"enum swc_ecma_ast::PropName\">PropName</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.Stmt.html\" title=\"struct swc_ecma_ast::Stmt\">Stmt</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.BlockStmt.html\" title=\"struct swc_ecma_ast::BlockStmt\">BlockStmt</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"enum\" href=\"swc_ecma_ast/enum.StmtKind.html\" title=\"enum swc_ecma_ast::StmtKind\">StmtKind</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.WithStmt.html\" title=\"struct swc_ecma_ast::WithStmt\">WithStmt</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.ReturnStmt.html\" title=\"struct swc_ecma_ast::ReturnStmt\">ReturnStmt</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.LabeledStmt.html\" title=\"struct swc_ecma_ast::LabeledStmt\">LabeledStmt</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.BreakStmt.html\" title=\"struct swc_ecma_ast::BreakStmt\">BreakStmt</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.ContinueStmt.html\" title=\"struct swc_ecma_ast::ContinueStmt\">ContinueStmt</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.IfStmt.html\" title=\"struct swc_ecma_ast::IfStmt\">IfStmt</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.SwitchStmt.html\" title=\"struct swc_ecma_ast::SwitchStmt\">SwitchStmt</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.ThrowStmt.html\" title=\"struct swc_ecma_ast::ThrowStmt\">ThrowStmt</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.TryStmt.html\" title=\"struct swc_ecma_ast::TryStmt\">TryStmt</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.WhileStmt.html\" title=\"struct swc_ecma_ast::WhileStmt\">WhileStmt</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.DoWhileStmt.html\" title=\"struct swc_ecma_ast::DoWhileStmt\">DoWhileStmt</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.ForStmt.html\" title=\"struct swc_ecma_ast::ForStmt\">ForStmt</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.ForInStmt.html\" title=\"struct swc_ecma_ast::ForInStmt\">ForInStmt</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.ForOfStmt.html\" title=\"struct swc_ecma_ast::ForOfStmt\">ForOfStmt</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.SwitchCase.html\" title=\"struct swc_ecma_ast::SwitchCase\">SwitchCase</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.CatchClause.html\" title=\"struct swc_ecma_ast::CatchClause\">CatchClause</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"enum\" href=\"swc_ecma_ast/enum.VarDeclOrPat.html\" title=\"enum swc_ecma_ast::VarDeclOrPat\">VarDeclOrPat</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"enum\" href=\"swc_ecma_ast/enum.VarDeclOrExpr.html\" title=\"enum swc_ecma_ast::VarDeclOrExpr\">VarDeclOrExpr</a>","impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"struct\" href=\"swc_ecma_ast/struct.Ident.html\" title=\"struct swc_ecma_ast::Ident\">Ident</a>",];
implementors["swc_ecma_parser"] = ["impl&lt;__Folder&gt; <a class=\"trait\" href=\"swc_common/fold/trait.FoldWith.html\" title=\"trait swc_common::fold::FoldWith\">FoldWith</a>&lt;__Folder&gt; for <a class=\"enum\" href=\"swc_ecma_parser/parser/stmt/enum.ForHead.html\" title=\"enum swc_ecma_parser::parser::stmt::ForHead\">ForHead</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
